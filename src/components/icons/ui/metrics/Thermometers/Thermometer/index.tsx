import ThermometerCold from "../ThermometerCold"
import ThermometerHot from "../ThermometerHot"

interface ThermometerProps {
    className?: string
    temp: number
}

const Thermometer = ({ className, temp }: ThermometerProps) => {
    return temp > 0 ? <ThermometerHot className={className} /> : <ThermometerCold className={className} /> 
}

export default Thermometer