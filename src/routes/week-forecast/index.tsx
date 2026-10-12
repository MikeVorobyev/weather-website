import { createFileRoute } from '@tanstack/react-router'
import { fetchWeather } from '../../api/weather'
import WeeklyForecast from '../../components/WeatherDashboard/WeeklyForecast'
import ForecastToggleLink from '../../components/links/ForecastToggleLink'
import styles from './index.module.scss'

export const Route = createFileRoute('/week-forecast/')({
  loaderDeps: ({ search }) => ({
    latitude: search.latitude,
    longitude: search.longitude
  }),
  loader: ({ deps }) => {
    const {latitude, longitude} = deps
    if(!latitude || !longitude) return null
    return fetchWeather(latitude, longitude)
  },
  component: RouteComponent,
})



function RouteComponent() {
  const weather = Route.useLoaderData()
  if (!weather) return <div>Загрузка...</div>
  const { daily } = weather
  
  return (
    <div className={styles.weekForecastPage}>
      <div className={styles.forecastToggleLinkOnPageWrapper}>
        <ForecastToggleLink className={styles.forecastToggleLinkOnPage} />
      </div>
      
      <WeeklyForecast 
        className={styles.weeklyForecastComponent}
        daily={daily}
      />
    </div>
  )
}
