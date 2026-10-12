import { createFileRoute } from '@tanstack/react-router'
import WeatherDashboard from '../components/WeatherDashboard'
import { fetchWeather } from '../api/weather'

export const Route = createFileRoute('/')({
  loaderDeps: ({ search }) => ({
    latitude: search.latitude,
    longitude: search.longitude
  }),
  loader: async ({ deps }) => {
    if(!deps.latitude || !deps.longitude) return null
    return await fetchWeather(deps.latitude, deps.longitude)
  },
  component: RouteComponent,
})

function RouteComponent() {
  const weather= Route.useLoaderData()
  
  if (!weather) return <div>Загрузка...</div>
  
  return (
    <WeatherDashboard weather={weather}/>
  )
}