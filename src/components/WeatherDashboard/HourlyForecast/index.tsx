import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import type { Weather } from "../../../api/weather"
import { getTimeParts, getTemperatureParts } from "../../../utils/format"
import { getWeatherDescription } from "../../../constants/weatherCodes"
import Thermometer from "../../icons/ui/metrics/Thermometers/Thermometer"
import WeatherIconUniversal from "../../icons/weather/WeatherIconUniversal"
import styles from './index.module.scss'
import clsx from "clsx"

interface HourlyForecastProps {
    className: string
    hourly: Weather['hourly']
}

const HourlyForecast = ({ className, hourly }: HourlyForecastProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)


    return (
        <div className={clsx(className)}>
            <div className={clsx(styles.hourlyForecast)}>
                <div className={clsx(styles.title)}>
                    <p>Почасовая погода</p>
                </div>
                <div className={clsx(styles.content)}>
                    <div className={clsx(styles.container)}>
                        <ul className={clsx(styles.contentUl)}>
                            {
                                hourly.map((h, i) => {
                                    if(i === 0) return
                                    
                                    const { sign, value } = getTemperatureParts(h.temperature)
                                    const isOpen = openIndex === i
                                    return (
                                        <li 
                                            key={i}
                                            className={clsx(styles.contentLi)}
                                        >
                                            <div className={clsx(styles.containerTop)}>
                                                <p className={clsx(styles.time)}>{getTimeParts(h.time).hour}:00</p>

                                                <div className={clsx(styles.weatherIconWrapper)}>
                                                    <WeatherIconUniversal 
                                                        className={clsx(styles.weatherIcon)}
                                                        isDay={h.is_day}
                                                        weatherCode={h.weather_code}
                                                    />
                                                </div>

                                                <div className={clsx(styles.temperatureWrapper)}>
                                                    <p className={clsx(styles.temperature)}>{sign}{value}</p>

                                                    <Thermometer
                                                        className={clsx(styles.thermometer)} 
                                                        temp={h.temperature}
                                                    />
                                                </div>
                                            </div>

                                            <div className={clsx(styles.descriptionContainer)} >
                                                <div className={clsx(styles.descriptionContainerHeader)}>
                                                    <div
                                                        data-attribute={i}
                                                        onClick={(e) => {
                                                            const indx = Number(e.currentTarget.dataset.attribute)
                                                            setOpenIndex((prev)=> prev === indx ? null : indx)
                                                        }} 
                                                    >
                                                        <IoIosArrowDropdownCircle className={clsx(styles.descriptionIcon, isOpen && styles.openDescription)} />
                                                        <p>Подробнее</p>
                                                    </div>
                                                </div>

                                                <div className={clsx(styles.descriptionWrapper, isOpen && styles.openDescription)}>
                                                    <div className={clsx(styles.descriptionInner)}>
                                                        <p className={clsx(styles.description)}>{getWeatherDescription(h.weather_code)}</p>
                                                        <p className={clsx(styles.description)}>Вероятность осадков: {h.precipitation_probability ?? 0}%</p>
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

export default HourlyForecast