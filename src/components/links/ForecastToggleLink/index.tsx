import type { ComponentProps } from 'react'
import { Link, useLocation, useNavigate } from '@tanstack/react-router'
import { isValidKey } from '../../../utils/typeGuard'
import styles from './index.module.scss'
import clsx from 'clsx'

const routesMap = {
  '/': {
    to: '/week-forecast',
    label: 'неделю',
  },
  '/week-forecast': {
    to: '/',
    label: 'сегодня',
  },
} as const

const ForecastToggleLink = ({ className, ...props }: ComponentProps<typeof Link>) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  
  if (!isValidKey(pathname, routesMap)) {
    setTimeout(() => {
      navigate({ to: '/' })
    }, 0)
    return null
  }
  
  const route = routesMap[pathname]

  return (
    <Link 
      to={route.to}
      search={true}
      className={clsx(styles.forecastToggleLink, className)}
      {...props}
    >
      <p className={clsx(styles.labelText)}>Погода на {route.label}</p>
    </Link>
  )
}

export default ForecastToggleLink