import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const NotFound = lazy(() => import('@/app/error-404/page'))
const Dashboard = lazy(() => import('@/app/dashboard/page'))
const AuthSignIn = lazy(() => import('@/app/sign-in/page'))
const AuthSignUp = lazy(() => import('@/app/sign-up/page'))

export const appRoutes = [
  {
    path: '/',
    name: 'root',
    element: <Navigate to="/dashboard" />,
  },
  {
    path: '*',
    name: 'not-found',
    element: <NotFound />,
  },
  {
    path: 'dashboard',
    name: 'dashboard',
    element: <Dashboard />,
  },
]

export const authRoutes = [
  {
    path: '/sign-in',
    name: 'Sign In',
    element: <AuthSignIn />,
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    element: <AuthSignUp />,
  },
  {
    name: '404 Error',
    path: '/error-404',
    element: <NotFound />,
  },
]
