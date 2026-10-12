import type { SVGProps } from 'react'

const FogNight = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
            <g id="fog-night__fog-night">
                <g id="fog-night__Mask group">
                    <mask 
                        id="fog-night__mask0_1868_4607" 
                        width="128" 
                        height="75" 
                        x="0" 
                        y="0" 
                        maskUnits="userSpaceOnUse" 
                        style={{ maskType: 'alpha' }}
                    >
                        <rect id="fog-night__Mask" width="128" height="75" fill="#000" />
                    </mask>
                    <g mask="url(#fog-night__mask0_1868_4607)">
                        <g id="fog-night__Moon">
                            <path 
                                id="fog-night__Moon_2" 
                                fill="url(#fog-night__paint0_linear_1868_4607)" 
                                stroke="#72b9d5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M61.253 40.587c-3.315 14.614 9.42 28.515 24.068 27.44C82.652 76.963 74.298 83.5 64.368 83.5 52.285 83.5 42.5 73.835 42.5 61.93c0-10.863 8.147-19.85 18.753-21.343"
                            />
                            <animateTransform 
                                attributeName="transform" 
                                begin="0s" 
                                calcMode="spline" 
                                dur="3s" 
                                keySplines=".42 0 .58 1; .42 0 .58 1" 
                                repeatCount="indefinite" 
                                type="rotate" 
                                values="-6 63.9 62.0;6 63.9 62.0;-6 63.9 62.0"
                            />
                        </g>
                    </g>
                </g>
                
                <g id="fog-night__Precipitation">
                    {/* ВЕРХНЯЯ ПОЛОСКА: короткая, плывет ВПРАВО */}
                    <path 
                        id="fog-night__Line 1" 
                        stroke="#e2e8f0" 
                        strokeLinecap="round" 
                        strokeMiterlimit="10" 
                        strokeWidth="3" 
                        d="M46 81h36"
                    >
                        <animateTransform 
                            attributeName="transform" 
                            begin="0s" 
                            calcMode="spline" 
                            dur="4s" 
                            keySplines=".42 0 .58 1; .42 0 .58 1" 
                            repeatCount="indefinite" 
                            type="translate" 
                            values="0 0;4 0;0 0"
                        />
                    </path>
                    
                    {/* НИЖНЯЯ ПОЛОСКА: короткая, плывет ВЛЕВО */}
                    <path 
                        id="fog-night__Line 2" 
                        stroke="#e2e8f0" 
                        strokeLinecap="round" 
                        strokeMiterlimit="10" 
                        strokeWidth="3" 
                        d="M34 89h40"
                    >
                        <animateTransform 
                            attributeName="transform" 
                            begin="-2s" 
                            calcMode="spline" 
                            dur="3.5s" 
                            keySplines=".42 0 .58 1; .42 0 .58 1" 
                            repeatCount="indefinite" 
                            type="translate" 
                            values="0 0;-4 0;0 0"
                        />
                    </path>
                </g>
            </g>

            <defs>
                <linearGradient 
                    id="fog-night__paint0_linear_1868_4607" 
                    x1="64" 
                    x2="64" 
                    y1="40" 
                    y2="84" 
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#86c3db" />
                    <stop offset="1" stopColor="#72b9d5" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default FogNight