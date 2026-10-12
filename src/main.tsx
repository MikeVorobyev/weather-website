import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.scss'
import './index.scss'
import 'leaflet/dist/leaflet.css'

import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)