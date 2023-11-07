import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import ErrorPage from './pages/404'
import ProductsPage from './pages/products'
import ProfilePage from './pages/profile'
import DetailProductPage from './pages/detailProduct'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/products',
    element: <ProductsPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/products/:id',
    element: <DetailProductPage />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
