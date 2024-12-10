import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import Context from './ctx/Context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
    <RouterProvider router={routes} /> 
    </Context>
  </StrictMode>,
)
