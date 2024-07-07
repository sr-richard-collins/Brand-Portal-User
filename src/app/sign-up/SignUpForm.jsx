import PasswordFormInput from '@/components/form/PasswordFormInput'
import PasswordWithStrengthInput from '@/components/form/PasswordWithStrengthInput'
import TextFormInput from '@/components/form/TextFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, FormCheck } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import * as yup from 'yup'
const SignUpForm = () => {
  const signUpSchema = yup.object({
    name: yup.string().required('please enter your name'),
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    password: yup.string().required('Please enter your password'),
  })
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(signUpSchema),
  })

  return (
    <form className="authentication-form" onSubmit={handleSubmit(() => {})}>
      <TextFormInput control={control} name="firstName" containerClassName="mb-3" label="First Name*" id="firstName" placeholder="Enter your name" />
      <TextFormInput control={control} name="lastName" containerClassName="mb-3" label="Last Name*" id="lastName" placeholder="Enter your name" />
      <TextFormInput control={control} name="userName" containerClassName="mb-3" label="UserName" id="userName" placeholder="Enter your name" />
      <TextFormInput control={control} name="email" containerClassName="mb-3" label="Email*" id="email" placeholder="Enter your email" />
      <PasswordWithStrengthInput
        control={control}
        name="password"
        containerClassName="mb-3"
        placeholder="Enter your password"
        id="password"
        label="Password"
      />
      <PasswordFormInput
        control={control}
        name="confirmPassword"
        containerClassName="mb-3"
        placeholder="Enter your password"
        id="confirmPassword"
        label="Confirm Password"
      />
      <div className="mb-3">
        <FormCheck label="I accept Terms and Condition" id="termAndCondition" />
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
