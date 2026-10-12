import type { SVGProps } from 'react'

const LocationIcon = (props: SVGProps<SVGSVGElement>) => {

    return (
        <svg 
            viewBox="0 0 17 21" 
            xmlns="http://www.w3.org/2000/svg" 
            width="17" 
            height="21" 
            fill="none"
            {...props}
        >
            <path 
                fillRule="evenodd"
                id="Вектор 165" d="M17 8.11364C17 3.61932 13.2083 0 8.5 0C3.79167 0 0 3.61932 0 
                8.11364C0 12.608 8.5 21 8.5 21C8.5 21 17 12.608 17 8.11364ZM4.54167 7.95455C4.54167 
                5.88636 6.33333 4.17614 8.5 4.17614C10.6667 4.17614 12.4583 5.84659 12.4583 
                7.95455C12.4583 10.0227 10.7083 11.733 8.5 11.733C6.33333 11.733 4.54167 
                10.0227 4.54167 7.95455Z" 
            />
        </svg>
    )
}

export default LocationIcon