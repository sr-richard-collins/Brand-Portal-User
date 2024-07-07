
//From Usage
import { useForm } from 'react-hook-form';
import PasswordFormInput from '@/components/form/PasswordFormInput';
import { Button, Modal, Row, ModalBody, ModalFooter, ModalHeader, FormLabel, FormSelect, } from 'react-bootstrap';
import * as API from "../EmployeeAPI"
import { useNotificationContext } from '@/context/useNotificationContext';

const PasswordEmployeeModal = ({
    show,
    toggle,
    employeeID
}) => {
    const { showNotification } = useNotificationContext()
    const { control, handleSubmit } = useForm();
    const UpdatePassword = handleSubmit(async values => {
        API.updatePassword({ id: employeeID, ...values }).then(() => {
            showNotification({
                message: "Password Changed",
                variant: 'success'
            });
            toggle();
        }).catch((e) => {
            if (e.response?.data?.message) {
                showNotification({
                    message: e.response?.data?.message,
                    variant: 'danger'
                });
            }
            else {
                showNotification({
                    message: "Server Connection Failed",
                    variant: 'danger'
                });
            }
        })
    })

    return <Modal show={show} onHide={toggle} className="fade" centered>
        <ModalHeader>
            <h5 className="modal-title" id="EmployeePasswordUpdate">
                Update Password
            </h5>
            <button type="button" className="btn-close" onClick={toggle} />
        </ModalHeader>

        <ModalBody>
            <form className="row g-3 mt-1" onSubmit={UpdatePassword}>
                <Row>
                    <PasswordFormInput name="password" label="Password" containerClassName="mb-3" control={control} required />
                </Row>

                <ModalFooter>
                    <Button variant="secondary" type="button" onClick={toggle}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Set Password
                    </Button>
                </ModalFooter>
            </form>
        </ModalBody>
    </Modal >
}

export default PasswordEmployeeModal