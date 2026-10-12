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
  
  if (!weather) return  <div 
                          style={
                            {
                              fontSize: '36px', 
                              textAlign: 'center', 
                              background: '#2C2F34', 
                              borderRadius: '20px', 
                              padding: '20px', 
                              margin: '20px'
                            }}
                        >
                          Введите название города
                        </div>
  
  return (
    <WeatherDashboard weather={weather}/>
  )
}