//From Usage
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import TextFormInput from '@/components/form/TextFormInput'
import SelectFormInput from '@/components/form/SelectFormInput'
import { Button, Modal, Row, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'
import * as API from '../EmployeeAPI'
import { useNotificationContext } from '@/context/useNotificationContext'

const EditEmployeeModal = ({ show, toggle, reloadData, defaultData }) => {
  const { showNotification } = useNotificationContext()
  const [rolesList, setRolesList] = useState([])
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      ...defaultData,
    },
  })

  useEffect(() => {
    reset(defaultData)
  }, [defaultData, reset])

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

  const UpdateEmployee = handleSubmit(async (values) => {
    API.updateEmployee({ id: defaultData.id, ...values })
      .then(() => {
        reloadData()
        showNotification({
          message: 'Successfully Added',
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
  return (
    <Modal show={show} onHide={toggle} className="fade" centered>
      <ModalHeader>
        <h5 className="modal-title" id="exampleModalCenterTitle">
          Edit Employee
        </h5>
        <button type="button" className="btn-close" onClick={toggle} />
      </ModalHeader>

      <ModalBody>
        <form className="row g-3 mt-1" onSubmit={UpdateEmployee}>
          <Row>
            <TextFormInput name="name" label="Name" containerClassName="mb-3" control={control} required />
            <TextFormInput name="email" label="Email" containerClassName="mb-3" control={control} required />
            <SelectFormInput control={control} name="role" label="Role" containerClassName="mb-3" required options={rolesList} />
          </Row>

          <ModalFooter>
            <Button variant="secondary" type="button" onClick={toggle}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal>
  )
}

export default EditEmployeeModal
