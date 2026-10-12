import ForecastToggleLink from '../links/ForecastToggleLink'

import styles from './index.module.scss'
import LocationInfo from './LocationInfo'
import SearchInput from './SearchInput'

const NavigationMenu = () => {
    return (
        <nav className={styles.navigationMenu}>
            <LocationInfo className={styles.locationInfoComponent} />

            <SearchInput
                className={styles.searchInputComponent}
                type='search'
                placeholder='Поиск города...'
                aria-label="Поиск города"
            />

            <ForecastToggleLink className={styles.forecastToggleLink} />
        </nav>
    )
}

export default NavigationMenu