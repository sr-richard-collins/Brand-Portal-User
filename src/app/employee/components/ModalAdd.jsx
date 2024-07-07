import { useState, useEffect } from 'react'
//From Usage
import { useForm } from 'react-hook-form'
// import avatar1 from '@/assets/images/users/avatar-1.jpg';
import TextFormInput from '@/components/form/TextFormInput'
import SelectFormInput from '@/components/form/SelectFormInput'
import PasswordFormInput from '@/components/form/PasswordFormInput'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Modal, Row, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'
import { useNotificationContext } from '@/context/useNotificationContext'
import * as API from '../EmployeeAPI'

const AddEmployeeModal = ({ show, toggle, reloadData }) => {
  const { showNotification } = useNotificationContext()
  const [rolesList, setRolesList] = useState([])
  const { control, handleSubmit } = useForm()
  const [avatarPreview, setAvatarPreview] = useState('./unknown.png')
  const [avatarFile, setAvatarFile] = useState(null)

  useEffect(() => {
    API.getRoles()
      .then((res) => {
        setRolesList(
          res.data.map((role) => {
            return { value: role.id, label: role.name }
          }),
        )
      })
      .catch((e) => {
        showNotification({
          message: 'Server Connection Failed',
          variant: 'danger',
        })
      })
  }, [])

  const AddEmployee = handleSubmit(async (values) => {
    const formData = new FormData()
    formData.append('name', values.name)
    formData.append('email', values.email)
    formData.append('role', values.role)
    formData.append('password', values.password)
    if (avatarFile) {
      formData.append('avatar', avatarFile)
    }
    API.addEmployee(formData)
      .then(() => {
        reloadData()
        showNotification({
          message: 'Successfully Updated',
          variant: 'success',
        })
        toggle()
      })
      .catch((e) => {
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
      })
  })

  const handleChange = (e) => {
    const { files } = e.target
    if (files && files.length > 0) {
      setAvatarFile(files[0])
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarPreview(reader.result)
      }
      reader.readAsDataURL(files[0])
    }
  }

  return (
    <Modal show={show} onHide={toggle} className="fade" centered>
      <ModalHeader>
        <h5 className="modal-title" id="exampleModalCenterTitle">
          Add Employee
        </h5>
        <button type="button" className="btn-close" onClick={toggle} />
      </ModalHeader>

      <ModalBody>
        <form className="row lg" onSubmit={AddEmployee}>
          <div className="d-flex justify-content-center mb-3 mt-3">
            <div
              className="avatar-title bg-body rounded-circle border border-3 border-dashed-light position-relative ml-3"
              style={{ width: '120px', height: '120px' }}>
              <label htmlFor="imageInputRight" className="position-absolute end-0 bottom-0">
                <div className="cursor-pointer">
                  <span className="avatar-title bg-light text-dark rounded-circle">
                    <IconifyIcon icon="bx:camera" style={{ width: '35px', height: '35px', padding: '4px' }} />
                  </span>
                </div>
              </label>
              <input
                name="avatar"
                className="hidden"
                type="file"
                id="imageInputRight"
                accept="image/*"
                onChange={handleChange}
                style={{ display: 'none' }}
              />
              <img id="previewRight" src={avatarPreview} alt="Preview Image" className="rounded-circle" style={{ width: '120px', height: '120px' }} />
            </div>
          </div>
          <Row className="d-flex justify-content-center align-items-center">
            <TextFormInput name="name" label="Name" placeholder="Enter Name" containerClassName="mb-3" control={control} required />
            <TextFormInput name="email" label="Email" placeholder="Enter Email" containerClassName="mb-3" control={control} required />
            <SelectFormInput control={control} name="role" label="Role" containerClassName="mb-3" required options={rolesList} />
            <PasswordFormInput name="password" label="Password" control={control} placeholder="password" containerClassName="mb-3" required />
          </Row>

          <ModalFooter>
            <Button variant="secondary" type="button" onClick={toggle}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add Employee
            </Button>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal>
  )
}

export default AddEmployeeModal
