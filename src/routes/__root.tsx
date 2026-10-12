import { Outlet, createRootRoute } from '@tanstack/react-router'
import NavigationMenu from '../components/NavigationMenu'
import Footer from '../components/Footer'
import styles from './__root.module.scss'
import { z } from 'zod'

export const searchSchema = z.object({
  city: z.string().optional(),
  region: z.string().optional(),
  latitude: z.coerce.number().optional(), 
  longitude: z.coerce.number().optional(),
})

export const Route = createRootRoute({
  validateSearch: searchSchema,
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className={styles.rootWrapper}>
      <div className={styles.contentContainer}>
        <NavigationMenu />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}