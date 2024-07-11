import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const NotFound = lazy(() => import('@/app/error-404/page'))
const Dashboard = lazy(() => import('@/app/dashboard/page'))
const Mot1 = lazy(() => import('@/app/dashboard/page'))
const Mot2 = lazy(() => import('@/app/dashboard/page'))
const AuthSignIn = lazy(() => import('@/app/sign-in/page'))
const AuthSignUp = lazy(() => import('@/app/sign-up/page'))
const Profile = lazy(() => import('@/app/profile/page'))
const Terms = lazy(() => import('@/app/terms/page'))

export const appRoutes = [
  {
    path: '/',
    name: 'root',
    element: <Navigate to="/dashboard" />,
  },
  {
    path: 'mot1',
    name: 'mot1',
    element: <Mot1 />,
  },
  {
    path: 'mot2',
    name: 'mot2',
    element: <Mot2 />,
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
  {
    path: 'profile',
    name: 'profile',
    element: <Profile />,
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
    path: '/terms',
    name: 'Sign Up',
    element: <Terms />,
  },
  {
    name: '404 Error',
    path: '/error-404',
    element: <NotFound />,
  },
]
