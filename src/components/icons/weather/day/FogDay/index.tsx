import type { SVGProps } from 'react'

const FogDay = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
            <g id="fog-day__fog-day">
                <g id="fog-day__Mask group">
                    <mask id="fog-day__mask0_1868_4589" width="128" height="75" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
                        <rect id="fog-day__Mask" width="128" height="75" fill="#000" />
                    </mask>
                    <g mask="url(#fog-day__mask0_1868_4589)">
                        <g id="fog-day__Sun">
                            <circle 
                                id="fog-day__Core" 
                                cx="64" 
                                cy="72" 
                                r="12.5" 
                                fill="url(#fog-day__paint0_linear_1868_4589)" 
                                stroke="#f8af18"
                            />
                            <g id="fog-day__Rays">
                                <path 
                                    fill="#f8af18" 
                                    d="M62 42a2 2 0 1 1 4 0v9.333a2 2 0 1 1-4 0zM83.799 49.373a2 2 0 1 1 2.828 2.828l-6.6 6.6a2 2 0 0 1-2.828-2.829zM94 70a2 2 0 1 1 0 4h-9.333a2 2 0 1 1 0-4zM86.627 91.799a2 2 0 1 1-2.828 2.828l-6.6-6.6a2 2 0 0 1 2.829-2.828zM62 92.667a2 2 0 1 1 4 0V102a2 2 0 1 1-4 0zM47.972 85.2a2 2 0 0 1 2.829 2.828l-6.6 6.6a2 2 0 1 1-2.828-2.829zM43.333 70a2 2 0 1 1 0 4H34a2 2 0 1 1 0-4zM50.8 55.972a2 2 0 0 1-2.828 2.829l-6.6-6.6a2 2 0 1 1 2.829-2.828z"
                                />
                                <animateTransform 
                                    attributeName="transform" 
                                    begin="0s" 
                                    dur="6s" 
                                    repeatCount="indefinite" 
                                    type="rotate" 
                                    values="0 64.0 72.0;360 64.0 72.0"
                                />
                            </g>
                        </g>
                    </g>
                </g>
                
                <g id="fog-day__Precipitation">
                    {/* ВЕРХНЯЯ ПОЛОСКА: короткая, плывет ВПРАВО */}
                    <path 
                        id="fog-day__Line 1" 
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
                    
                    {/* НИЖНЯЯ ПОЛОСКА: тоже короткая, но плывет ВЛЕВО и с другой скоростью */}
                    <path 
                        id="fog-day__Line 2" 
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
                    id="fog-day__paint0_linear_1868_4589" 
                    x1="64" 
                    x2="64" 
                    y1="59" 
                    y2="85" 
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fbbf24" />
                    <stop offset="1" stopColor="#f8af18" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default FogDay