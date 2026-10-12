import { type Weather } from "../../api/weather"
import CurrentWeather from "./CurrentWeather"
import HourlyForecast from "./HourlyForecast"
import WeatherMap from "./WeatherMap"
import WeeklyForecast from "./WeeklyForecast"
import styles from './index.module.scss'

interface WeatherProps {
    weather: Weather
}

const WeatherDashboard = ({ weather }: WeatherProps) => {
    const  { timezone, timezone_abbreviation, current, hourly, daily } = weather

    return (
        <div className={styles.weatherDashboard}>
            <CurrentWeather 
                className={styles.currentWeatherComponent}
                current={current}
                timezone={timezone}
                timezoneAbbreviation={timezone_abbreviation}
            />
            <HourlyForecast 
                className={styles.hourlyForecastComponent} 
                hourly={hourly}
            />
            <WeatherMap className={styles.weatherMapComponent} />
            <WeeklyForecast 
                className={styles.weeklyForecastComponent}
                daily={daily} 
            />
        </div>
    )
}

export default WeatherDashboard