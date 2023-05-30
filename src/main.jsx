import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routers/routers.jsx'
import { RouterProvider } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>

          <HelmetProvider>
            <div className='max-w-screen-xl mx-auto container'>
              <RouterProvider router={router}>
              </RouterProvider>
            </div>
          </HelmetProvider>
        </QueryClientProvider>
      </AuthProvider>
    </>
  </React.StrictMode>,
)
