import type { ComponentProps } from 'react'
import { useEffect, useState } from 'react'
import { useSearch } from '@tanstack/react-router'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import styles from './index.module.scss'
import clsx from 'clsx'
import { SiOpenstreetmap } from "react-icons/si";
import { TbCloudStorm } from "react-icons/tb";

// 1. Фикс иконки (обязательно для Vite/Webpack)
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

// 2. Компонент-контроллер
function MapController({ center }: { center: [number, number] }) {
    const map = useMap()

    useEffect(() => {
        // ГЛАВНЫЙ ФИКС: заставляет Leaflet пересчитать размеры после рендера
        map.invalidateSize()
        map.setView(center, map.getZoom())
    }, [center, map])

    return null
}

const WeatherMap = ({ className }: ComponentProps<'div'>) => {
    const search = useSearch({ strict: false })
    const [showRadar, setShowRadar] = useState(false)

    const lat = search.latitude
    const lng = search.longitude
    const cityName = search.city || 'Ваш город'

    return (
        <div className={clsx(className)}>
            <div className={clsx(styles.weatherMap)}>
                <div className={clsx(styles.title)}>
                    <p>Карта</p>
                </div>
                <div className={clsx(styles.content)}>
                    {lat !== undefined && lng !== undefined && (
                        <>
                            {/* Кнопка переключения */}
                            <button
                                className={clsx(styles.toggleButton, showRadar && styles.active)}
                                onClick={() => setShowRadar(!showRadar)}
                            >
                                {
                                    showRadar 
                                        ? 
                                            <div>
                                                <SiOpenstreetmap 
                                                    className={clsx(styles.buttonImg)}
                                                /> Обычная карта
                                            </div> 
                                        : 
                                            <div>
                                                <TbCloudStorm
                                                    className={clsx(styles.buttonImg)}
                                                /> Карта осадков
                                            </div>
                                }
                            </button>

                            {/* УСЛОВНЫЙ РЕНДЕР: или Leaflet, или Windy */}
                            {showRadar ? (
                                <iframe
                                    key={`${lat}-${lng}`}
                                    className={styles.radarFrame}
                                    src={`https://embed.windy.com/embed2.html?lat=${lat}&lon=${lng}&zoom=10&overlay=rain&marker=${lat},${lng}`}
                                    title="Windy Radar"
                                />
                            ) : (
                                <MapContainer
                                    className={styles.map}
                                    center={[lat, lng]}
                                    zoom={12}
                                    attributionControl={false}
                                >
                                    <MapController center={[lat, lng]} />

                                    <TileLayer
                                        attribution=''
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />

                                    <Marker position={[lat, lng]}>
                                        <Popup><strong>{cityName}</strong></Popup>
                                    </Marker>
                                </MapContainer>
                            )}

                            {/* Подпись OpenStreetMap (только для Leaflet) */}
                            {!showRadar && (
                                <div className={styles.attribution}>
                                    <a href="https://leafletjs.com" target="_blank" rel="noreferrer">Leaflet</a>
                                    <span> | © </span>
                                    <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default WeatherMap