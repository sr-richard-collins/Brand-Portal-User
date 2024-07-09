import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Col, Row, Button } from 'react-bootstrap'
import axios from '@/helpers/axiosConfig'
import { useNotificationContext } from '@/context/useNotificationContext'
import PasswordFormInput from '@/components/form/PasswordFormInput'
import PasswordWithStrengthInput from '@/components/form/PasswordWithStrengthInput'
import TextFormInput from '@/components/form/TextFormInput'
import avatar1 from '@/assets/images/users/dummy-avatar.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const { control, reset, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      firstName: user.first_name,
      lastName: user.last_name,
      userName: user.username,
      email: user.email,
      password: '',
      setPassword: '',
      current_password: '',
      avatar: null,
    },
  })
  const { showNotification } = useNotificationContext()
  const [preview, setPreview] = useState(user.avatar || avatar1)

  useEffect(() => {
    reset({
      firstName: user.first_name,
      lastName: user.last_name,
      userName: user.username,
      email: user.email,
    })
  }, [])

  const onSubmit = async (data) => {
    try {
      if (data.current_password) {
        try {
          const response = await axios.post('/check-password', {
            current_password: data.current_password,
            id: user.id,
          })
          if (!response.data.success) {
            showNotification({
              message: response.data.message,
              variant: 'danger',
            })
            return
          }
        } catch (error) {
          showNotification({
            message: error.response.data.message,
            variant: 'danger',
          })
          return
        }
      }

      const formData = new FormData()
      formData.append('id', user.id)
      formData.append('firstName', data.firstName)
      formData.append('lastName', data.lastName)
      formData.append('userName', data.userName)
      formData.append('email', data.email)
      if (data.password) {
        formData.append('password', data.setPassword)
      }
      if (data.avatar) {
        formData.append('avatar', data.avatar[0])
      }

      const response = await axios.post('/update-profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if (response.data.success) {
        showNotification({
          message: 'Profile updated successfully',
          variant: 'success',
        })
        localStorage.setItem('user', JSON.stringify(response.data.user))
        setPreview(response.data.user.avatar || avatar1)
      } else {
        showNotification({
          message: response.data.message || 'Failed to update profile',
          variant: 'danger',
        })
      }
    } catch (error) {
      showNotification({
        message: 'An error occurred while updating profile',
        variant: 'danger',
      })
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setValue('avatar', e.target.files)
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <h4 className="fs-16 fw-semibold mb-1">Profile Information</h4>
      <p className="text-muted">Setup your profile information</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <div className="avatar-lg mb-3">
              <div className="avatar-title bg-body rounded-circle border border-3 border-dashed-light position-relative">
                <label htmlFor="imageInput" className="position-absolute end-0 bottom-0">
                  <div className="avatar-xs cursor-pointer">
                    <span className="avatar-title bg-light text-dark rounded-circle">
                      <IconifyIcon icon="bx:camera" />
                    </span>
                  </div>
                </label>
                <input className="hidden" type="file" id="imageInput" accept="image/*" onChange={handleImageChange} />
                <img id="preview" src={preview} alt="Preview Image" className="rounded-circle img-fluid" />
              </div>
            </div>
            <Row>
              <Col md={6}>
                <TextFormInput name="firstName" label="First Name*" placeholder="Chris" containerClassName="mb-3" control={control} />
              </Col>
              <Col md={6}>
                <TextFormInput name="lastName" label="Last Name*" placeholder="Keller" containerClassName="mb-3" control={control} />
              </Col>
              <Col md={6}>
                <TextFormInput name="userName" label="Username" placeholder="Username" containerClassName="mb-3" control={control} />
              </Col>
              <Col md={6}>
                <TextFormInput name="email" label="Email*" placeholder="admin@gmail.com" containerClassName="mb-3" control={control} />
              </Col>
              <PasswordFormInput
                control={control}
                name="current_password"
                containerClassName="mb-3"
                placeholder="Enter your current password"
                id="current_password"
                label="Current Password"
              />
              <PasswordWithStrengthInput
                control={control}
                name="setPassword"
                containerClassName="mb-3"
                placeholder="Enter your new password"
                id="setPassword"
                label="Set New Password"
              />
            </Row>
            <Button type="submit" variant="primary">
              Update Profile
            </Button>
          </Col>
        </Row>
      </form>
    </>
  )
}

export default Profile
