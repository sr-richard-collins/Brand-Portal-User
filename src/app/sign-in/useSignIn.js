import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import * as yup from 'yup'
import { useAuthContext } from '@/context/useAuthContext'
import { useNotificationContext } from '@/context/useNotificationContext'
import axios from '@/helpers/axiosConfig'
const useSignIn = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { saveSession, removeSession } = useAuthContext()
  const [searchParams] = useSearchParams()
  const { showNotification } = useNotificationContext()
  const loginFormSchema = yup.object({
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    password: yup.string().required('Please enter your password'),
  })
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: 'admin@gmail.com',
      password: '',
    },
  })
  const redirectUser = () => {
    const redirectLink = searchParams.get('redirectTo')
    navigate('/')
  }
  const login = handleSubmit(async (values) => {
    try {
      const res = await axios.post('/signin', {
        ...values,
      })
      if (res.data.token) {
        saveSession({
          ...(res.data ?? {}),
          token: res.data.token,
        })
        localStorage.setItem('user', JSON.stringify(res.data.user))
        redirectUser()
        showNotification({
          message: 'Successfully logged in. Redirecting....',
          variant: 'success',
        })
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e) {
      if (e.response?.data?.message) {
        showNotification({
          message: e.response?.data?.message,
          variant: 'danger',
        })
      } else {
        showNotification({
          message: 'Server Connection Failed',
          variant: 'danger',
        })
      }
    } finally {
      setLoading(false)
    }
  })
  const logout = () => {
    window.location.href = '/'
    removeSession()
    localStorage.removeItem('user')
    showNotification({
      message: 'Successfully logged out.',
      variant: 'success',
    })
  }
  return {
    loading,
    login,
    logout,
    control,
  }
}
export default useSignIn
