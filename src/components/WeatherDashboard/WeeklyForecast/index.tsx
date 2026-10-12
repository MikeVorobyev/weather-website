import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import type { Weather } from "../../../api/weather"
import { getWeekday, getDateParts, getTemperatureParts } from "../../../utils/format"
import { getWeatherDescription } from "../../../constants/weatherCodes";
import WeatherIconUniversal from "../../icons/weather/WeatherIconUniversal"
import Thermometer from "../../icons/ui/metrics/Thermometers/Thermometer"
import styles from './index.module.scss'
import clsx from "clsx"

interface WeeklyForecastProps {
    className: string
    daily: Weather['daily']
}

const WeeklyForecast = ({ className, daily }: WeeklyForecastProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    return (
        <div className={clsx(className)}>
            <div className={clsx(styles.weeklyForecast)}>
                <div className={clsx(styles.title)}>
                    <p>Погода на неделю</p>
                </div>

                <div className={clsx(styles.content)}>
                    <div className={clsx(styles.container)}>
                        <ul className={clsx(styles.contentUl)}>
                            {
                                daily.map((d, i) => {
                                    const weekDay = getWeekday(d.time, 'short')
                                    const {  dayNumber, nameMonth } = getDateParts(d.time)
                                    const isOpen = openIndex === i
                                    
                                    return (
                                        <li 
                                            key={i}
                                            className={clsx(styles.contentLi)}
                                        >
                                            <div>
                                                <div
                                                    className={clsx(styles.leftContainer)}
                                                >
                                                    <p>{weekDay}</p>
                                                    <p className={clsx(styles.dayAndMonth)}>{dayNumber} {nameMonth}</p>
                                                </div>

                                                <div
                                                    className={clsx(styles.rightContainer)}
                                                >
                                                    <div className={clsx(styles.dayContainer)}>
                                                        <p>День</p>
                                                        <div>
                                                            <p>{getTemperatureParts(d.temperature_max).sign}{getTemperatureParts(d.temperature_max).value}</p>
                                                            <Thermometer 
                                                                className={clsx(styles.thermometer)}
                                                                temp={d.temperature_max}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className={clsx(styles.nightContainer)}>
                                                        <p>Ночь</p>
                                                        <div>
                                                            <p>{getTemperatureParts(d.temperature_min).sign}{getTemperatureParts(d.temperature_min).value}</p>
                                                            <Thermometer 
                                                                className={clsx(styles.thermometer)} 
                                                                temp={d.temperature_min}
                                                            />
                                                        </div>
                                                    </div>

                                                    <WeatherIconUniversal 
                                                        className={clsx(styles.weatherIcon)}
                                                        isDay={true} 
                                                        weatherCode={d.weather_code}
                                                    />
                                                </div>
                                            </div>

                                            <div 
                                                className={clsx(styles.bottomContainer)}
                                                data-attribute={i}
                                                onClick={(e) => {
                                                    const indx = Number(e.currentTarget.dataset.attribute)
                                                    setOpenIndex((prev)=> prev === indx ? null : indx)
                                                }}
                                            >
                                                <div className={clsx(styles.header)} >
                                                    <IoIosArrowDropdownCircle className={clsx(styles.descriptionIcon, isOpen && styles.open)} />
                                                    <p>Подробнее</p>
                                                </div>

                                                <div className={clsx(styles.bodyWrapper, isOpen && styles.open)}>
                                                    <div className={clsx(styles.body)}>
                                                        <p>{getWeatherDescription(d.weather_code)}</p>
                                                        <p>Сумма осадков {d.precipitation_sum}%</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeeklyForecast