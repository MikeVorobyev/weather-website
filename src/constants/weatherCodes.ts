import { isValidKey } from "../utils/typeGuard";

// Импорты дневных иконок
import ClearDay from "../components/icons/weather/day/ClearDay";
import MostlyClearDay from "../components/icons/weather/day/MostlyClearDay";
import PartlyCloudyDay from "../components/icons/weather/day/PartlyCloudyDay";
import OvercastDay from "../components/icons/weather/day/OvercastDay";
import FogDay from "../components/icons/weather/day/FogDay";
import FogAndRimeDay from "../components/icons/weather/day/FogAndRimeDay";
import OvercastDayDrizzleLightly from "../components/icons/weather/day/OvercastDayDrizzleLightly";
import OvercastDayDrizzle from '../components/icons/weather/day/OvercastDayDrizzle';
import HeavyDrizzleDay from '../components/icons/weather/day/HeavyDrizzleDay';
import OvercastDaySleetLightly from "../components/icons/weather/day/OvercastDaySleetLightly";
import OvercastDaySleet from "../components/icons/weather/day/OvercastDaySleet";
import LightRainDay from "../components/icons/weather/day/LightRainDay"
import RainDay from "../components/icons/weather/day/RainDay"
import HeavyRainDay from "../components/icons/weather/day/HeavyRainDay"
import LightIcyRainDay from "../components/icons/weather/day/LightIcyRainDay"
import IcyRainDay from "../components/icons/weather/day/IcyRainDay"
import SnowLightDay from "../components/icons/weather/day/SnowLightDay"
import SnowDay from "../components/icons/weather/day/SnowDay"
import SnowHeavyDay from "../components/icons/weather/day/SnowHeavyDay"
import HailSmallDay from "../components/icons/weather/day/HailSmallDay"
import DownpourSmallDay from "../components/icons/weather/day/DownpourSmallDay"
import DownpourDay from "../components/icons/weather/day/DownpourDay"
import DownpourHeavyDay from "../components/icons/weather/day/DownpourHeavyDay"
import SnowfallLightDay from "../components/icons/weather/day/SnowfallLightDay"
import SnowfallHeavyDay from "../components/icons/weather/day/SnowfallHeavyDay"
import ThunderstormsDay from "../components/icons/weather/day/ThunderstormsDay"
import ThunderstormsHailDay from "../components/icons/weather/day/ThunderstormsHailDay"
import ThunderstormsHeavyHailDay from "../components/icons/weather/day/ThunderstormsHeavyHailDay"

// Импорты ночных иконок
import ClearNight from "../components/icons/weather/night/ClearNight";
import MostlyClearNight from "../components/icons/weather/night/MostlyClearNight";
import PartlyCloudyNight from "../components/icons/weather/night/PartlyCloudyNight";
import OvercastNight from "../components/icons/weather/night/OvercastNight";
import FogNight from "../components/icons/weather/night/FogNight";
import FogAndRimeNight from "../components/icons/weather/night/FogAndRimeNight";
import OvercastNightDrizzleLightly from "../components/icons/weather/night/OvercastNightDrizzleLightly";
import OvercastNightDrizzle from "../components/icons/weather/night/OvercastNightDrizzle";
import HeavyDrizzleNight from '../components/icons/weather/night/HeavyDrizzleNight';
import OvercastNightSleetLightly from "../components/icons/weather/night/OvercastNightSleetLightly";
import OvercastNightSleet from "../components/icons/weather/night/OvercastNightSleet";
import LightRainNight from "../components/icons/weather/night/LightRainNight"
import RainNight from "../components/icons/weather/night/RainNight"
import HeavyRainNight from "../components/icons/weather/night/HeavyRainNight"
import LightIcyRainNight from "../components/icons/weather/night/LightIcyRainNight"
import IcyRainNight from "../components/icons/weather/night/IcyRainNight"
import SnowLightNight from "../components/icons/weather/night/SnowLightNight"
import SnowNight from "../components/icons/weather/night/SnowNight"
import SnowHeavyNight from "../components/icons/weather/night/SnowHeavyNight"
import HailSmallNight from "../components/icons/weather/night/HailSmallNight"
import DownpourSmallNight from "../components/icons/weather/night/DownpourSmallNight"
import DownpourNight from "../components/icons/weather/night/DownpourNight"
import DownpourHeavyNight from "../components/icons/weather/night/DownpourHeavyNight"
import SnowfallLightNight from "../components/icons/weather/night/SnowfallLightNight"
import SnowfallHeavyNight from "../components/icons/weather/night/SnowfallHeavyNight"
import ThunderstormsNight from "../components/icons/weather/night/ThunderstormsNight"
import ThunderstormsHailNight from "../components/icons/weather/night/ThunderstormsHailNight"
import ThunderstormsHeavyHailNight from "../components/icons/weather/night/ThunderstormsHeavyHailNight"


export const weatherCodes = {
    0: {
        description: 'Ясно',
        icon: {
            day: ClearDay,
            night: ClearNight
        }
    },
    1: {
        description: 'Преимущественно ясно',
        icon: {
            day: MostlyClearDay,
            night: MostlyClearNight
        }
    },
    2: {
        description: 'Переменная облачность',
        icon: {
            day: PartlyCloudyDay,
            night: PartlyCloudyNight
        }
    },
    3: {
        description: 'Пасмурно',
        icon: {
            day: OvercastDay,  
            night: OvercastNight
        }
    },
    45: {
        description: 'Туман',
        icon: {
            day: FogDay,
            night: FogNight
        }
    },
    48: {
        description: 'Туман с инеем',
        icon: {
            day: FogAndRimeDay,
            night: FogAndRimeNight
        }
    },
    51: {
        description: 'Лёгкая морось',
        icon: {
            day: OvercastDayDrizzleLightly,
            night: OvercastNightDrizzleLightly
        }
    },
    53: {
        description: 'Морось',
        icon: {
            day: OvercastDayDrizzle,
            night: OvercastNightDrizzle
        }
    },
    55: {
        description: 'Сильная морось',
        icon: {
            day: HeavyDrizzleDay,
            night: HeavyDrizzleNight
        }
    },
    56: {
        description: 'Лёгкая ледяная морось',
        icon: {
            day: OvercastDaySleetLightly,
            night: OvercastNightSleetLightly
        }
    },
    57: {
        description: 'Ледяная морось',
        icon: {
            day: OvercastDaySleet,
            night: OvercastNightSleet
        }
    },
    61: {
        description: 'Небольшой дождь',
        icon: {
            day: LightRainDay,
            night: LightRainNight
        }
    },
    63: {
        description: 'Дождь',
        icon: {
            day: RainDay,
            night: RainNight
        }
    },
    65: {
        description: 'Сильный дождь',
        icon: {
            day: HeavyRainDay,
            night: HeavyRainNight
        }
    },
    66: {
        description: 'Лёгкий ледяной дождь',
        icon: {
            day: LightIcyRainDay,
            night: LightIcyRainNight
        }
    },
    67: {
        description: 'Ледяной дождь',
        icon: {
            day: IcyRainDay,
            night: IcyRainNight
        }
    },
    71: {
        description: 'Небольшой снег',
        icon: {
            day: SnowLightDay,
            night: SnowLightNight
        }
    },
    73: {
        description: 'Снег',
        icon: {
            day: SnowDay,
            night: SnowNight
        }
    },
    75: {
        description: 'Сильный снег',
        icon: {
            day: SnowHeavyDay,
            night: SnowHeavyNight
        }
    },
    77: {
        description: 'Мелкий град',
        icon: {
            day: HailSmallDay,
            night: HailSmallNight
        }
    },
    80: {
        description: 'Небольшой ливень',
        icon: {
            day: DownpourSmallDay,
            night: DownpourSmallNight
        }
    },
    81: {
        description: 'Ливень',
        icon: {
            day: DownpourDay,
            night: DownpourNight
        }
    },
    82: {
        description: 'Сильный ливень',
        icon: {
            day: DownpourHeavyDay,
            night: DownpourHeavyNight
        }
    },
    85: {
        description: 'Небольшой снегопад',
        icon: {
            day: SnowfallLightDay,
            night: SnowfallLightNight
        }
    },
    86: {
        description: 'Сильный снегопад',
        icon: {
            day: SnowfallHeavyDay,
            night: SnowfallHeavyNight
        }
    },
    95: {
        description: 'Гроза',
        icon: {
            day: ThunderstormsDay,
            night: ThunderstormsNight
        }
    },
    96: {
        description: 'Гроза с градом',
        icon: {
            day: ThunderstormsHailDay,
            night: ThunderstormsHailNight
        }
    },
    99: {
        description: 'Гроза с сильным градом',
        icon: {
            day: ThunderstormsHeavyHailDay,
            night: ThunderstormsHeavyHailNight
        }
    }
} as const;

export const getWeatherDescription = (weatherCode: number) => {
    const desc = isValidKey(weatherCode, weatherCodes) 
            ? weatherCodes[weatherCode].description
            : ''
    return desc
}