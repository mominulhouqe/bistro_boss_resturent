import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routers/routers.jsx'
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto container'>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  </React.StrictMode>,
)
