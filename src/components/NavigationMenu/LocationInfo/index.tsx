import type { ComponentProps } from 'react'
import { useSearch } from '@tanstack/react-router'
import LocationIcon from '../../icons/ui/LocationIcon'
import styles from './index.module.scss'
import clsx from 'clsx'

const LocationInfo = ({ className, ...props }: ComponentProps<'div'>) => {
    const search = useSearch({strict: false})
    return (
        <div 
           className={clsx(styles.locationInfo, className)} 
           {...props}
        >
            <div className={styles.locationIconWrapper}>
                <LocationIcon className={styles.locationIcon} />
            </div>
            <p>{search.city || 'Ваш город'}{search.region ? `, ${search.region}` : ''} </p>
        </div>
    )
}

export default LocationInfo