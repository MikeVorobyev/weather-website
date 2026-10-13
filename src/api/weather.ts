import axios from "axios";
import { z } from 'zod'

const weatherShema = z.object({
    // Таймзона
    timezone: z.string(),              // Например: "Europe/Moscow"
    timezone_abbreviation: z.string(), // Например: "GMT+3"

    // Текущая погода.
    current: z.object({
        time: z.string(),
        temperature_2m: z.number(),                             // Температура воздуха на высоте 2 метров.
        apparent_temperature: z.number(),                       // Ощущаемая температура.
        weather_code: z.number(),
        wind_speed_10m: z.number(),                             // Скорость ветра на высоте 10 метров.
        relative_humidity_2m: z.number(),                       // Относительная влажность.
        is_day: z.number()
    }),

    // Почасовой прогноз погоды.
    hourly: z.object({
        time: z.array(z.string()),                      // Массив дат и часов.
        temperature_2m: z.array(z.number()),            // Массив температур на каждый час.
        weather_code: z.array(z.number()),              // Массив кодов погоды на каждый час.
        precipitation_probability: z.array(z.number()), // Массив вероятности осадков 
                                                        // в процентах (0-100) на каждый час.
        is_day: z.array(z.number()),
    }),

    // Погода на 7 дней.
    daily: z.object({
        time: z.array(z.string()),                     // Массив дат.
        weather_code: z.array(z.number()),             // Массив кодов погоды для каждого дня.
        temperature_2m_max: z.array(z.number()),       // Массив максимальных температур за 7 дней.
        temperature_2m_min: z.array(z.number()),       // Массив минимальных температур за 7 дней.
        precipitation_sum: z.array(z.number()),        // Массив суммы осадков в миллиметрах за день.
    })
}).transform((data) => {
    const transformedCurrent = {
        time: data.current.time,
        temperature: data.current.temperature_2m,
        apparent_temperature: data.current.apparent_temperature,
        weather_code: data.current.weather_code,
        wind_speed: data.current.wind_speed_10m,
        relative_humidity: data.current.relative_humidity_2m,
        is_day: Boolean(data.current.is_day)
    }

    const currentHourInCity = Number(data.current.time.split('T')[1].split(':')[0]) // Текущее время в выбранном городе
    const transformedHourly = data.hourly.time.slice(currentHourInCity, 24).map((time, i) => ({
        time,
        temperature: data.hourly.temperature_2m[i + currentHourInCity],
        weather_code: data.hourly.weather_code[i + currentHourInCity],
        precipitation_probability: data.hourly.precipitation_probability[i + currentHourInCity],
        is_day: Boolean(data.hourly.is_day[i + currentHourInCity])
    }))

    const transformedDaily = data.daily.time.slice(1).map((time, i) => ({
        time,
        weather_code: data.daily.weather_code[i + 1],
        temperature_max: data.daily.temperature_2m_max[i + 1],
        temperature_min: data.daily.temperature_2m_min[i + 1],
        precipitation_sum: data.daily.precipitation_sum[i + 1]
    }))

    return ({
        timezone: data.timezone,
        timezone_abbreviation: data.timezone_abbreviation,
        current: transformedCurrent,
        hourly: transformedHourly,
        daily: transformedDaily
    })
})

export type Weather = z.infer<typeof weatherShema>

export async function fetchWeather(latitude: number, longitude: number): Promise<Weather | null> {
    try {
        // 1. Собираем параметры в строку
        const params = new URLSearchParams({
            latitude: String(latitude),
            longitude: String(longitude),
            current: 'temperature_2m,apparent_temperature,weather_code,wind_speed_10m,relative_humidity_2m,is_day',
            hourly: 'temperature_2m,weather_code,precipitation_probability,is_day',
            daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum',
            timezone: 'auto',
            forecast_days: '8'
        }).toString();

        // 2. Формируем целевой URL
        const targetUrl = `https://api.open-meteo.com/v1/forecast?${params}`;
        
        // 3. Оборачиваем его в публичный прокси (corsproxy.io)
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`;

        // 4. Делаем запрос через прокси
        const res = await axios.get(proxyUrl);

        const parsed = weatherShema.safeParse(res.data);
        return parsed.success ? parsed.data : null;
    } catch(err) {
        console.log('ERROR weather: ', err);
        return null;
    }
}