import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import fetchMenuUrl from './fetchMenuUrl'

const NotFound = lazy(() => import('@/app/error-404/page'))
const AuthSignIn = lazy(() => import('@/app/sign-in/page'))
const AuthSignUp = lazy(() => import('@/app/sign-up/page'))
const Profile = lazy(() => import('@/app/profile/page'))
const Content = lazy(() => import('@/app/content/page'))
const Terms = lazy(() => import('@/app/terms/page'))

export const staticAppRoutes = [
  {
    path: '/',
    name: 'root',
    element: <Navigate to="/Home" />,
  },
  {
    path: '*',
    name: 'not-found',
    element: <NotFound />,
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

const DynamicAppRoutes = () => {
  const dynamicRoutes = fetchMenuUrl('/getAllMenu') // Replace with your backend URL

  const mergedRoutes = [
    ...staticAppRoutes,
    ...dynamicRoutes.map((route) => ({
      path: `/:name`,
      name: route.name,
      status: route.status,
      element: <Content />, // Assuming all dynamic routes go to Content
    })),
  ]

  return mergedRoutes
}

export default DynamicAppRoutes
