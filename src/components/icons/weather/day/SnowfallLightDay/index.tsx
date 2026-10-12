import type { SVGProps } from 'react'

const SnowfallLightDay = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 128 128"
            width="100%"
            height="100%"
            className={className}
            {...props}
        >
            <g id="snowfall-light-day__snowfall-light-day" clipPath="url(#snowfall-light-day__clip0)">
                <g id="snowfall-light-day__Sky">
                    <g id="snowfall-light-day__Sun">
                        <circle 
                            id="snowfall-light-day__Core" 
                            cx="39" 
                            cy="51" 
                            r="8.5" 
                            fill="url(#snowfall-light-day__paint0)" 
                            stroke="#f8af18"
                        />
                        <g id="snowfall-light-day__Rays">
                            <path 
                                fill="#f8af18" 
                                d="M37.688 31.313a1.312 1.312 0 1 1 2.624 0v6.125a1.312 1.312 0 1 1-2.624 0zM51.993 36.15a1.312 1.312 0 1 1 1.856 1.857l-4.33 4.33a1.312 1.312 0 1 1-1.857-1.855zM58.688 49.688a1.312 1.312 0 1 1 0 2.624h-6.126a1.312 1.312 0 1 1 0-2.624zM53.85 63.993a1.312 1.312 0 1 1-1.857 1.856l-4.33-4.33a1.312 1.312 0 1 1 1.855-1.857zM37.688 64.563a1.312 1.312 0 1 1 2.624 0v6.124a1.312 1.312 0 1 1-2.624 0zM28.482 59.662a1.312 1.312 0 1 1 1.856 1.856l-4.331 4.331a1.312 1.312 0 1 1-1.856-1.856zM25.438 49.688a1.312 1.312 0 1 1 0 2.624h-6.125a1.312 1.312 0 1 1 0-2.624zM30.338 40.482a1.312 1.312 0 1 1-1.856 1.856l-4.331-4.331a1.312 1.312 0 1 1 1.856-1.856z"
                            />
                            <animateTransform 
                                attributeName="transform" 
                                begin="0s" 
                                dur="6s" 
                                repeatCount="indefinite" 
                                type="rotate" 
                                values="0 39.0 51.0;360 39.0 51.0"
                            />
                        </g>
                    </g>
                    
                    <g id="snowfall-light-day__Clouds">
                        <g id="snowfall-light-day__Cloud">
                            <path 
                                id="snowfall-light-day__Cloud_2" 
                                fill="url(#snowfall-light-day__paint1)" 
                                stroke="#e6effc" 
                                strokeMiterlimit="10" 
                                d="M55.262 48.475c4.86-7.864 15.035-11.095 23.553-7.532 8.506 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.34-2.86 13.475-.373l.423.255z"
                            />
                        </g>
                        <animateTransform 
                            attributeName="transform" 
                            begin="0s" 
                            calcMode="spline" 
                            dur="3s" 
                            keySplines=".42 0 .58 1; .42 0 .58 1" 
                            repeatCount="indefinite" 
                            type="translate" 
                            values="0 0;0 -3;0 0"
                        />
                    </g>
                </g>

                <g id="snowfall-light-day__Precipitation">
                    <g id="snowfall-light-day__Snowflakes">
                        {/* Снежинка 1 (X=40) */}
                        <path 
                            id="snowfall-light-day__Snowflake 1" 
                            fill="#86c3db" 
                            d="m40.578 90.366-1.205-.689a2.9 2.9 0 0 0-.002-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 36.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
                        >
                            <animateTransform attributeName="transform" begin="-0.2s" calcMode="spline" dur="1s" keySplines=".42 0 1 1" repeatCount="indefinite" type="translate" values="0 0;0 20"/>
                            <animate attributeName="opacity" begin="-0.2s" dur="1s" keyTimes="0;0.15;0.85;1" repeatCount="indefinite" values="0;1;1;0"/>
                        </path>
                        
                        {/* Снежинка 2 (X=52) */}
                        <path 
                            id="snowfall-light-day__Snowflake 2" 
                            fill="#86c3db" 
                            d="m52.578 90.366-1.205-.689a2.9 2.9 0 0 0-.002-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 48.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
                        >
                            <animateTransform attributeName="transform" begin="-0.6s" calcMode="spline" dur="1s" keySplines=".42 0 1 1" repeatCount="indefinite" type="translate" values="0 0;0 20"/>
                            <animate attributeName="opacity" begin="-0.6s" dur="1s" keyTimes="0;0.15;0.85;1" repeatCount="indefinite" values="0;1;1;0"/>
                        </path>

                        {/* Снежинка 3 (X=64) */}
                        <path 
                            id="snowfall-light-day__Snowflake 3" 
                            fill="#86c3db" 
                            d="m64.578 90.366-1.205-.689a2.9 2.9 0 0 0-.002-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 60.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
                        >
                            <animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="1s" keySplines=".42 0 1 1" repeatCount="indefinite" type="translate" values="0 0;0 20"/>
                            <animate attributeName="opacity" begin="0s" dur="1s" keyTimes="0;0.15;0.85;1" repeatCount="indefinite" values="0;1;1;0"/>
                        </path>

                        {/* Снежинка 4 (X=76) */}
                        <path 
                            id="snowfall-light-day__Snowflake 4" 
                            fill="#86c3db" 
                            d="m76.578 90.366-1.205-.689a2.9 2.9 0 0 0-.002-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 72.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
                        >
                            <animateTransform attributeName="transform" begin="-0.8s" calcMode="spline" dur="1s" keySplines=".42 0 1 1" repeatCount="indefinite" type="translate" values="0 0;0 20"/>
                            <animate attributeName="opacity" begin="-0.8s" dur="1s" keyTimes="0;0.15;0.85;1" repeatCount="indefinite" values="0;1;1;0"/>
                        </path>

                        {/* Снежинка 5 (X=88) */}
                        <path 
                            id="snowfall-light-day__Snowflake 5" 
                            fill="#86c3db" 
                            d="m88.578 90.366-1.205-.689a2.9 2.9 0 0 0-.002-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 84.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
                        >
                            <animateTransform attributeName="transform" begin="-0.4s" calcMode="spline" dur="1s" keySplines=".42 0 1 1" repeatCount="indefinite" type="translate" values="0 0;0 20"/>
                            <animate attributeName="opacity" begin="-0.4s" dur="1s" keyTimes="0;0.15;0.85;1" repeatCount="indefinite" values="0;1;1;0"/>
                        </path>
                    </g>
                </g>
            </g>

            <defs>
                <linearGradient id="snowfall-light-day__paint0" x1="39" x2="39" y1="42" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fbbf24" />
                    <stop offset="1" stopColor="#f8af18" />
                </linearGradient>
                <linearGradient id="snowfall-light-day__paint1" x1="64.001" x2="64.001" y1="39" y2="89" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f3f7fe" />
                    <stop offset="1" stopColor="#e6effc" />
                </linearGradient>
                <clipPath id="snowfall-light-day__clip0">
                    <rect width="128" height="128" fill="#fff" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default SnowfallLightDay