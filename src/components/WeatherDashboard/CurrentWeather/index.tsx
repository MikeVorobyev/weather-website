// import type { ComponentProps } from "react"
import type { Weather } from "../../../api/weather"
import { getTemperatureParts, formatDate, getCityTimeParts, getWeekday } from "../../../utils/format"
import { useNow } from "../../../hooks/useNow"
import { getWeatherDescription } from "../../../constants/weatherCodes"
import styles from './index.module.scss'
import clsx from "clsx"

import Thermometer from "../../icons/ui/metrics/Thermometers/Thermometer"
import Droplet from "../../icons/ui/metrics/Droplet"
import WindSpeed from "../../icons/ui/metrics/WindSpeed"
import WeatherIconUniversal from "../../icons/weather/WeatherIconUniversal"

interface CurrentWeatherProps {
    className?: string
    current: Weather['current']
    timezone: Weather['timezone']
    timezoneAbbreviation: Weather['timezone_abbreviation']
}

const CurrentWeather = ({ className, current, timezone, timezoneAbbreviation }: CurrentWeatherProps)=> {
    const {
        time,
        temperature,
        apparent_temperature,
        weather_code,
        wind_speed,
        relative_humidity,
        is_day
    } = current
    const now = useNow()
    const { hour, minute } = getCityTimeParts(timezone, now)

    const temp = getTemperatureParts(temperature)
    const apparentTemp = getTemperatureParts(apparent_temperature)

    const weatherDescription = getWeatherDescription(weather_code)

    const date = formatDate(time)
    const weekday = getWeekday(time)

    return (
        <div className={clsx(className)}>
            <div className={clsx(styles.currentWeather)}>
                <div className={clsx(styles.title)}>
                    <p>Погода сейчас</p>
                </div>
                
                <div className={clsx(styles.content)}>
                    <div className={clsx(styles.containerLeft)}>
                        <div className={clsx(styles.containerLeftTop)}>
                            <div className={clsx(styles.temperature)}>
                                <div className={clsx(styles.temp)}>
                                    <p className={clsx(styles.sign)}>{temp.sign}</p>
                                    <p className={clsx(styles.value)}>{temp.value}</p>
                                </div>

                                <div className={clsx(styles.celsiusIconWrapper)}>
                                    <p>°C</p>
                                </div>

                                <div className={clsx(styles.thermometerIconWrapper)}>
                                    <Thermometer
                                        className={clsx(styles.thermometerIcon)}
                                        temp={temperature}
                                    />
                                </div>
                            </div>

                            <div className={clsx(styles.apparentTemperatureWrapper)}>
                                <p className={clsx(styles.apparentTemperature)}>
                                    Ощущается как {apparentTemp.sign}{apparentTemp.value} °C
                                </p>

                                <div className={clsx(styles.apparentTemperatureMobile)}>
                                    <p>Ощущается как:</p>
                                    <p>{apparentTemp.sign}{apparentTemp.value} °C</p>
                                </div>
                            </div>
                        </div>

                        <div className={clsx(styles.containerLeftBottom)}>
                            <div className={clsx(styles.relativeHumidityContainer)}>
                                <div>
                                    <Droplet className={clsx(styles.dropletIcon)}/>
                                    <p className={clsx(styles.relativeHumidityTitle)}>
                                        Влажность
                                    </p>

                                    <p className={clsx(styles.relativeHumidityTitleMobile)}>
                                        Влажность:
                                    </p>
                                </div>

                                <div className={clsx(styles.relativeHumidityWrapper)}>
                                    <Droplet className={clsx(styles.dropletIconMobile)}/>
                                    <p className={clsx(styles.relativeHumidity)}>
                                        {relative_humidity}%
                                    </p>
                                </div>
                            </div>

                            <div className={clsx(styles.windSpeedContainer)}>
                                <div>
                                    <WindSpeed className={clsx(styles.windSpeedIcon)} />
                                    <p className={clsx(styles.windSpeedTitle)}>
                                        Скорость ветра
                                    </p>

                                    <p className={clsx(styles.windSpeedTitleMobile)}>
                                        Скорость ветра:
                                    </p>
                                </div>

                                <div className={clsx(styles.windSpeedWrapper)}>
                                    <WindSpeed className={clsx(styles.windSpeedIconMobile)} />
                                    <p className={clsx(styles.windSpeed)}>
                                        {wind_speed} <span className={clsx(styles.windSpeedUnit)}>Км/ч</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={clsx(styles.containerCenter)}>
                        <WeatherIconUniversal
                            className={clsx(styles.weatherIconUniversal)}
                            isDay={is_day} 
                            weatherCode={weather_code} 
                        />
                        <p>{weatherDescription}</p>
                    </div>

                    <div className={clsx(styles.containerRight)}>
                        <div className={styles.dateWrapper}>
                            <p className={styles.weekday}>{weekday}</p>
                            <p className={styles.date}>{date}</p>
                        </div>
                        
                        <div className={styles.timeWrapper}>
                            <p className={styles.timezoneAbbreviation}>
                                {timezoneAbbreviation}
                            </p>

                            <p className={styles.time}>
                                {hour}
                                <span className={styles.blinkingColon}>:</span>
                                {minute}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather