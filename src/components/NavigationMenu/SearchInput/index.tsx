import { useState, useMemo } from 'react'
import type { ComponentProps } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import SearchIcon from '../../icons/ui/SearchIcon'
import styles from './index.module.scss'
import clsx from 'clsx'
import { searchLocation, type Location } from '../../../api/geocoding';
import { debounce } from 'lodash';
import { useNavigate } from '@tanstack/react-router';

const SearchInput = ({ className, ...props }: ComponentProps<'input'>) => {
    const [inputValue, setInputValue] = useState('')
    const [searchQuery, setSearchQuery] = useState<Location[]>([])
    const navigate = useNavigate()

    const debounceSearch = useMemo(() => {
        return (
            debounce((query: string) => {
                if(query.trim().length < 2) setSearchQuery([])
                else searchLocation(query).then(setSearchQuery)
            }, 400)
        )
    }, [])

    const handleCity = (location: Location) => {
        navigate({
            to: '.',
            search: {
                city: location.city,
                region: location.region,
                latitude: location.latitude,
                longitude: location.longitude,
            }
        })
        setInputValue('')
        setSearchQuery([])
    }

    return (
        <div className={clsx(styles.searchInput, className)}>
            <SearchIcon className={styles.searchIcon}/>

            <input 
                className={styles.input}
                {...props}
                value={inputValue}
                onChange={(event ) => {
                    setInputValue(event.target.value)
                    debounceSearch(event.target.value)
                }}
                onKeyDown={(e) => {
                    if(e.key === 'Escape') {
                        setInputValue('')
                        setSearchQuery([])
                    }
                }}
            />

            {inputValue.length > 0 && <IoMdCloseCircle className={styles.close} onClick={() => {
                    setInputValue('')
                    setSearchQuery([])
                }}
            />}

                <ul className={clsx(styles.listCities, inputValue.length >= 2 && searchQuery.length > 0 && styles.listOpen)}>
                    <li className={styles.listTitle}>
                        <p>Выберите свой город:</p>
                    </li>
                    {searchQuery.map((location) => 
                    <li 
                        className={styles.listCity}
                        key={location.id}
                        onClick={() => handleCity(location)}
                    >
                        {location.city}, {location.regionFull}
                    </li>
                    )}
                </ul>
        </div>
    )
}

export default SearchInput