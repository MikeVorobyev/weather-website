import { weatherCodes } from '../../../../constants/weatherCodes'
import { isValidKey } from '../../../../utils/typeGuard'

// import styles from './index.module.scss'

interface WeatherIconUniversalProps {
    className?: string
    isDay: boolean
    weatherCode: number
}

const WeatherIconUniversal = ({ className, isDay,  weatherCode }: WeatherIconUniversalProps) => {
    const weather = isValidKey(weatherCode, weatherCodes) 
            ? weatherCodes[weatherCode] 
            : null
    const WeatherIcon = isDay 
            ? weather?.icon.day 
            : weather?.icon.night

    return (
        <div>
            {WeatherIcon && <WeatherIcon className={className}/>}
        </div>
    )
}

export default WeatherIconUniversal