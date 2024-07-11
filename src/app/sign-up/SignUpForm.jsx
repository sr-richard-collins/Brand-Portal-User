import { useState } from 'react'
import axios from '@/helpers/axiosConfig'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, FormCheck } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import TextFormInput from '@/components/form/TextFormInput'
import PasswordFormInput from '@/components/form/PasswordFormInput'
import PasswordWithStrengthInput from '@/components/form/PasswordWithStrengthInput'
import { useNotificationContext } from '@/context/useNotificationContext'
import { useAuthContext } from '@/context/useAuthContext'
import { Link } from 'react-router-dom'

const SignUpForm = () => {
  const { showNotification } = useNotificationContext()
  const { saveSession } = useAuthContext()
  const [isSignIn, setIsSignIn] = useState(false)

  const signUpSchema = yup.object().shape({
    firstName: yup.string().required('Please enter your first name'),
    lastName: yup.string().required('Please enter your last name'),
    userName: yup.string(),
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    password: yup.string().required('Please enter your password').min(8, 'Password must be at least 8 characters'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    termAndCondition: yup.boolean().oneOf([true], 'Please accept the terms and conditions'),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  })

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post('/signup', formData)

      if (response.data.token) {
        saveSession({
          ...(response.data ?? {}),
          token: response.data.token,
        })
        localStorage.setItem('user', JSON.stringify(response.data.user))
        navigate('/')
        setIsSignIn(true)
        showNotification({
          message: 'Successfully logged in. Redirecting....',
          variant: 'success',
        })
      } else {
        showNotification({
          message: 'Something went wrong with login. Please try again.',
          variant: 'danger',
        })
      }
    } catch (error) {
      if (isSignIn === false)
        showNotification({
          message: error.response?.data?.message?.email || 'Something went wrong.',
          variant: 'danger',
        })
    }
  }

  return (
    <form className="authentication-form" onSubmit={handleSubmit(onSubmit)}>
      <TextFormInput
        control={control}
        name="firstName"
        containerClassName="mb-3"
        label="First Name*"
        id="firstName"
        placeholder="Enter your first name"
        error={errors.firstName?.message}
      />
      <TextFormInput
        control={control}
        name="lastName"
        containerClassName="mb-3"
        label="Last Name*"
        id="lastName"
        placeholder="Enter your last name"
        error={errors.lastName?.message}
      />
      <TextFormInput
        control={control}
        name="userName"
        containerClassName="mb-3"
        label="Username"
        id="userName"
        placeholder="Enter your username"
        error={errors.userName?.message}
      />
      <TextFormInput
        control={control}
        name="email"
        containerClassName="mb-3"
        label="Email*"
        id="email"
        placeholder="Enter your email"
        error={errors.email?.message}
      />
      <PasswordWithStrengthInput
        control={control}
        name="password"
        containerClassName="mb-3"
        label="Password*"
        id="password"
        placeholder="Enter your password"
        error={errors.password?.message}
      />
      <PasswordFormInput
        control={control}
        name="confirmPassword"
        containerClassName="mb-3"
        label="Confirm Password*"
        id="confirmPassword"
        placeholder="Confirm your password"
        error={errors.confirmPassword?.message}
      />
      <div className="mb-3">
        <FormCheck
          label={
            <span>
              I accept{' '}
              <Link to="/terms" className="text-decoration-underline">
                Terms and Conditions
              </Link>
              *
            </span>
          }
          id="termAndCondition"
          {...control.register('termAndCondition')}
          isInvalid={errors.termAndCondition?.message}
        />
        {errors.termAndCondition && <div className="invalid-feedback d-block">{errors.termAndCondition.message}</div>}
      </div>
      <div className="mb-1 text-center d-grid">
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </div>
    </form>
  )
}

export default SignUpForm
