import type { SVGProps } from 'react'

const DownpourSmallNight = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
            <g id="downpour-small-night__downpour-small-night" clipPath="url(#downpour-small-night__clip0)">
                <g id="downpour-small-night__Sky">
                    <g id="downpour-small-night__Moon">
                        <path 
                            id="downpour-small-night__Moon_2" 
                            fill="url(#downpour-small-night__paint0)" 
                            stroke="#72b9d5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M35.115 34.595c-1.737 8.568 5.638 16.62 14.198 16.188-1.64 5.05-6.424 8.717-12.095 8.717-7.03 0-12.718-5.621-12.718-12.541 0-6.214 4.588-11.375 10.615-12.364"
                        />
                        <animateTransform 
                            attributeName="transform" 
                            begin="0s" 
                            calcMode="spline" 
                            dur="3s" 
                            keySplines=".42 0 .58 1; .42 0 .58 1" 
                            repeatCount="indefinite" 
                            type="rotate" 
                            values="-6 36.9 47.0;6 36.9 47.0;-6 36.9 47.0"
                        />
                    </g>
                    
                    <g id="downpour-small-night__Clouds">
                        <g id="downpour-small-night__Cloud">
                            <path 
                                id="downpour-small-night__Cloud_2" 
                                fill="url(#downpour-small-night__paint1)" 
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

                <g id="downpour-small-night__Precipitation">
                    <g id="downpour-small-night__Raindrops">
                        {/* Капля 1 */}
                        <path 
                            id="downpour-small-night__Raindrop 1" 
                            stroke="#0a5ad4" 
                            strokeLinecap="round" 
                            strokeWidth="4" 
                            d="M40 83v12"
                        >
                            <animateTransform attributeName="transform" begin="-0.3s" calcMode="spline" dur="1s" keySplines=".42 0 1 1" repeatCount="indefinite" type="translate" values="0 0;0 20"/>
                            <animate attributeName="opacity" begin="-0.3s" dur="1s" keyTimes="0;0.15;0.85;1" repeatCount="indefinite" values="0;1;1;0"/>
                        </path>
                        {/* Капля 2 */}
                        <path 
                            id="downpour-small-night__Raindrop 2" 
                            stroke="#0a5ad4" 
                            strokeLinecap="round" 
                            strokeWidth="4" 
                            d="M52 83v12"
                        >
                            <animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="1s" keySplines=".42 0 1 1" repeatCount="indefinite" type="translate" values="0 0;0 20"/>
                            <animate attributeName="opacity" begin="0s" dur="1s" keyTimes="0;0.15;0.85;1" repeatCount="indefinite" values="0;1;1;0"/>
                        </path>
                        {/* Капля 3 */}
                        <path 
                            id="downpour-small-night__Raindrop 3" 
                            stroke="#0a5ad4" 
                            strokeLinecap="round" 
                            strokeWidth="4" 
                            d="M64 83v12"
                        >
                            <animateTransform attributeName="transform" begin="-0.6s" calcMode="spline" dur="1s" keySplines=".42 0 1 1" repeatCount="indefinite" type="translate" values="0 0;0 20"/>
                            <animate attributeName="opacity" begin="-0.6s" dur="1s" keyTimes="0;0.15;0.85;1" repeatCount="indefinite" values="0;1;1;0"/>
                        </path>
                        {/* Капля 4 */}
                        <path 
                            id="downpour-small-night__Raindrop 4" 
                            stroke="#0a5ad4" 
                            strokeLinecap="round" 
                            strokeWidth="4" 
                            d="M76 83v12"
                        >
                            <animateTransform attributeName="transform" begin="-0.2s" calcMode="spline" dur="1s" keySplines=".42 0 1 1" repeatCount="indefinite" type="translate" values="0 0;0 20"/>
                            <animate attributeName="opacity" begin="-0.2s" dur="1s" keyTimes="0;0.15;0.85;1" repeatCount="indefinite" values="0;1;1;0"/>
                        </path>
                        {/* Капля 5 */}
                        <path 
                            id="downpour-small-night__Raindrop 5" 
                            stroke="#0a5ad4" 
                            strokeLinecap="round" 
                            strokeWidth="4" 
                            d="M88 83v12"
                        >
                            <animateTransform attributeName="transform" begin="-0.8s" calcMode="spline" dur="1s" keySplines=".42 0 1 1" repeatCount="indefinite" type="translate" values="0 0;0 20"/>
                            <animate attributeName="opacity" begin="-0.8s" dur="1s" keyTimes="0;0.15;0.85;1" repeatCount="indefinite" values="0;1;1;0"/>
                        </path>
                    </g>
                </g>
            </g>

            <defs>
                <linearGradient id="downpour-small-night__paint0" x1="37" x2="37" y1="34" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#86c3db" />
                    <stop offset="1" stopColor="#72b9d5" />
                </linearGradient>
                <linearGradient id="downpour-small-night__paint1" x1="64.001" x2="64.001" y1="39" y2="89" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f3f7fe" />
                    <stop offset="1" stopColor="#e6effc" />
                </linearGradient>
                <clipPath id="downpour-small-night__clip0">
                    <rect width="128" height="128" fill="#fff" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default DownpourSmallNight