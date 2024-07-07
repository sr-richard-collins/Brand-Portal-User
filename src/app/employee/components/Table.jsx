import { useEffect, useState } from 'react'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { useNotificationContext } from '@/context/useNotificationContext'
import { Button, Card, CardBody, Col, Row } from 'react-bootstrap'
import { withSwal } from 'react-sweetalert2'
import * as API from '../EmployeeAPI'
//Table Usage
import RowsPerPage from '@/components/RowsPerPage'
import Pagination from '@/components/Pagination'
import SearchBox from '@/components/SearchBox'
import AddEmployeeModal from './ModalAdd'
import EditEmployeeModal from './ModalEdit'
import PasswordEmployeeModal from './ModalPassword'
import { IMAGE_BASE_URL, DEFAULT_AVATAR } from '@/helpers/axiosConfig'
const Table = withSwal((props) => {
  const { swal } = props
  const { showNotification } = useNotificationContext()
  const [data, setData] = useState()
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [addModalState, setAddModalState] = useState(false)
  const [editModalState, setEditModalState] = useState(false)
  const [passwordModalState, setPasswordModalState] = useState(false)
  const [selectedID, setSelectID] = useState(null)
  useEffect(() => {
    getTableData()
  }, [search, currentPage, perPage, totalPage])

  const getTableData = () => {
    API.getEmployee({ search, current_page: currentPage, per_page: perPage })
      .then((res) => {
        setData(res.data.data)
        API.getTotalPage({ per_page: perPage }).then((res) => {
          setTotalPage(res.data.total_page)
          setLoading(false)
        })
      })
      .catch((e) => {
        setLoading(false)

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
  }

  //Employee Actions
  const onPasswordChange = (id) => {
    setSelectID(id)
    setPasswordModalState(!passwordModalState)
  }
  const onEditEmployee = (id) => {
    setSelectID(id)
    setEditModalState(!editModalState)
  }
  const onDeleteEmployee = (id) => {
    swal
      .fire({
        title: 'Do you want to delete this employee?',
        text: 'It would not be recovered any more.',
        icon: 'question',
        customClass: {
          confirmButton: `btn btn-primary w-xs mt-2`,
        },
      })
      .then((result) => {
        if (result.isConfirmed)
          API.deleteEmployee(data[id].id)
            .then(() => {
              getTableData()
              showNotification({
                message: 'Employee deleted successfully',
                variant: 'success',
              })
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
  }

  return (
    <>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <div className="d-flex flex-wrap justify-content-between gap-3">
                <SearchBox value={search} setValue={(e) => setSearch(e.target.value)} />
                <div>
                  <Button variant="success" onClick={() => setAddModalState(!addModalState)}>
                    <IconifyIcon icon="bx:plus" className="me-1" />
                    Add Employee
                  </Button>
                </div>
              </div>
            </CardBody>
            <div>
              {loading ? (
                <div className="text-center">
                  <img src="./loading.gif" alt="Loading..." />
                </div>
              ) : (
                <div className="table-responsive table-centered">
                  <table className="table text-nowrap mb-0">
                    <thead className="bg-light bg-opacity-50">
                      <tr>
                        <th className="border-0 py-2" style={{ textAlign: 'center' }}>
                          ID
                        </th>
                        <th className="border-0 py-2">Name</th>
                        <th className="border-0 py-2" style={{ textAlign: 'center' }}>
                          Email
                        </th>
                        <th className="border-0 py-2" style={{ textAlign: 'center' }}>
                          Role
                        </th>
                        <th className="border-0 py-2" style={{ textAlign: 'center' }}>
                          Joined At
                        </th>
                        <th className="border-0 py-2" style={{ textAlign: 'center' }}>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((employee, idx) => (
                        <tr key={idx}>
                          <td style={{ textAlign: 'center' }}>#{employee.id}</td>
                          <td style={{ textAlign: 'center' }}>
                            <div className="d-flex align-items-center">
                              <img
                                src={employee.avatar ? IMAGE_BASE_URL + employee.avatar : IMAGE_BASE_URL + DEFAULT_AVATAR}
                                alt="user-img"
                                className="avatar-xs rounded-circle me-2"
                              />
                              <div>
                                <h5 className="fs-14 mt-1 fw-normal">{employee.name}</h5>
                              </div>
                            </div>
                          </td>
                          <td style={{ textAlign: 'center' }}>{employee.email}&nbsp;</td>

                          <td style={{ textAlign: 'center' }}>
                            <span
                              className={`badge badge-soft-${employee.role === 'admin' ? 'warning' : employee.role == 'content' ? 'success' : 'danger'}`}>
                              {employee.role_name}
                            </span>
                          </td>
                          <td style={{ textAlign: 'center' }}>{new Date(employee.created_at).toDateString()}</td>
                          <td style={{ textAlign: 'center' }}>
                            <Button variant="soft-primary" size="sm" type="button" className="me-2" onClick={() => onPasswordChange(idx)}>
                              <IconifyIcon icon="bx:lock" className="fs-16" />
                            </Button>
                            <Button variant="soft-secondary" size="sm" type="button" className="me-2" onClick={() => onEditEmployee(idx)}>
                              <IconifyIcon icon="bx:edit" className="fs-16" />
                            </Button>
                            <Button variant="soft-danger" size="sm" type="button" onClick={() => onDeleteEmployee(idx)}>
                              <IconifyIcon icon="bx:trash" className="bx bx-trash fs-16" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <div className="align-items-center justify-content-between row g-0 text-center text-sm-start p-3 border-top">
                <div className="col-sm">
                  <div className="text-muted">
                    <RowsPerPage rowCount={perPage} setRowsPerPage={(val) => setPerPage(val.target.value)} />
                  </div>
                </div>
                <Col sm="auto" className="mt-3 mt-sm-0">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPage}
                    rowsPerPageList={perPage}
                    setCurPage={(val) => () => setCurrentPage(val)}
                  />
                </Col>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <AddEmployeeModal show={addModalState} reloadData={getTableData} toggle={() => setAddModalState(!addModalState)} />
      {selectedID != null && (
        <>
          <EditEmployeeModal
            show={editModalState}
            defaultData={data[selectedID]}
            reloadData={getTableData}
            toggle={() => setEditModalState(!editModalState)}
          />
          <PasswordEmployeeModal
            show={passwordModalState}
            employeeID={data[selectedID].id}
            toggle={() => setPasswordModalState(!passwordModalState)}
          />
        </>
      )}
    </>
  )
})
export default Table
