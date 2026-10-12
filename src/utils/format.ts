/**
 * Разделяет температуру на знак и абсолютное значение для гибкой стилизации.
 * Для 0 и положительных чисел возвращает '+', для отрицательных '-'.
 * 
 * @param temp - Температура в градусах Цельсия
 * @returns Объект { sign: '+' | '-', value: number }
 */
export const getTemperatureParts = (temp: number) => {
    const rounded = Math.round(temp)
    const value = Math.abs(rounded)
    
    // Если 0 или больше -> '+', если меньше 0 -> '-'
    const sign = rounded >= 0 ? '+' : '-'
    
    return { sign, value }
}

/**
 * Форматирует скорость ветра для отображения.
 * Округляет до 1 знака после запятой.
 * 
 * @param speed - Скорость ветра в км/ч
 * @returns Строка с отформатированной скоростью (например, "2.5")
 */
export const formatWindSpeed = (speed: number): string => {
    return `${speed.toFixed(1)}`
}

/**
 * Извлекает части даты (год, месяц, день) из ISO-строки.
 * 
 * @param value - Дата и время в формате ISO (например, "2026-08-13T15:00")
 * @returns Объект с частями даты и названиями месяца { year: "2026", month: "08", day: "13" }
 */
export const getDateParts = (value: string) => {
    const [year, month, day] = value.split('T')[0].split('-')
    const namesMonth: Record<number, string> = 
        { 
            1: 'Янв', 2: 'Фев', 3: 'Март', 4: 'Апр', 5: 'Май', 6: 'Июнь',
            7: 'Июль', 8: 'Авг', 9: 'Сен', 10: 'Окт', 11: 'Ноя', 12: 'Дек',
        }
    const monthNumber = Number(month)
    const dayNumber = Number(day)
    const nameMonth = namesMonth[monthNumber]
    return { year, month, day, monthNumber, dayNumber, nameMonth }
}

/**
 * Извлекает части времени (часы и минуты) из ISO-строки.
 * Примечание: работает только для строк с временем (current/hourly). 
 * В daily-прогнозе ("2026-08-13") части времени нет.
 * 
 * @param value - Дата и время в формате ISO (например, "2026-08-13T15:00")
 * @returns Объект с частями времени { hour: "15", minute: "00" }
 */
export const getTimeParts = (value: string) => {
    const [hour, minute] = value.split('T')[1].split(':')
    return { hour, minute }
}

/**
 * Форматирует дату из ISO-строки в читаемый вид (ДД.ММ.ГГГГ).
 * 
 * @param value - Дата (и время) в формате ISO (например, "2026-08-13" или "2026-08-13T15:00")
 * @returns Отформатированная дата (например, "13.08.2026")
 */
export const formatDate = (value: string): string => {
    const { year, month, day } = getDateParts(value)
    return `${day}.${month}.${year}`
}

/**
 * Форматирует время из ISO-строки в читаемый вид (ЧЧ:ММ).
 * 
 * @param value - Дата и время в формате ISO (например, "2026-08-13T15:00")
 * @returns Отформатированное время (например, "15:00")
 */
export const formatTime = (value: string): string => {
    const { hour, minute } = getTimeParts(value)
    return `${hour}:${minute}`
}

/**
 * Определяет, относится ли указанное время к световому дню.
 * Днем считается время с 06:00 до 21:59 (час >= 6 и час < 22).
 * 
 * @param value - Дата и время в формате ISO (например, "2026-08-13T15:00")
 * @returns `true`, если указанное время — это день, `false` — если ночь
 */
export const isDay = (value: string): boolean => {
    const hour = Number(getTimeParts(value).hour)
    return hour >= 6 && hour < 22
}

/**
 * Возвращает время в указанном часовом поясе.
 * @param timeZone - IANA-имя пояса из API ("Asia/Vladivostok")
 * @param date - момент времени (по умолчанию - сейчас)
 */
export const getCityTime = (timeZone: string, date: Date = new Date()): string => {
    return date.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone,
    })
}

/**
 * Возвращает часы и минуты в указанном часовом поясе отдельными строками.
 */
export const getCityTimeParts = (timeZone: string, date: Date = new Date()) => {
    const parts = new Intl.DateTimeFormat('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone,
    }).formatToParts(date)

    return {
        hour: parts.find((p) => p.type === 'hour')?.value ?? '',
        minute: parts.find((p) => p.type === 'minute')?.value ?? '',
    }
}

/**
 * Возвращает день недели для даты из ISO-строки.
 * Собирать Date из чисел нужно, чтобы не словить сдвиг дня
 * из-за UTC-парсинга строк без времени (daily приходит как "2026-08-13").
 *
 * @param value - ISO-строка ("2026-08-13" или "2026-08-13T15:00")
 * @param weekday - 'long' (полностью) или 'short' (сокращённо)
 * @returns День недели с заглавной буквы ("Четверг" / "Чт")
 */
export const getWeekday = (value: string, weekday: 'long' | 'short' = 'long'): string => {
    const { year, month, day } = getDateParts(value)
    const date = new Date(Number(year), Number(month) - 1, Number(day))
    const formatted = date.toLocaleDateString('ru-RU', { weekday })
    return formatted[0].toUpperCase() + formatted.slice(1)
}