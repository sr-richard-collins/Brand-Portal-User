import { useEffect, useState } from 'react'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { useNotificationContext } from '@/context/useNotificationContext'
import { Button, Card, CardBody, Col, Row } from 'react-bootstrap'
import { withSwal } from 'react-sweetalert2'
import * as API from '../PostAPI'
//Table Usage
import RowsPerPage from '@/components/RowsPerPage'
import Pagination from '@/components/Pagination'
import SearchBox from '@/components/SearchBox'
import AddPostModal from './ModalAdd'
import EditPostModal from './ModalEdit'
import Switch from 'react-switch'

const Table = withSwal((props) => {
  const { swal } = props
  const { showNotification } = useNotificationContext()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [addModalState, setAddModalState] = useState(false)
  const [editModalState, setEditModalState] = useState(false)
  const [selectedID, setSelectID] = useState(null)

  useEffect(() => {
    getTableData()
  }, [search, currentPage, perPage])

  const getTableData = () => {
    API.getPosts({ search, current_page: currentPage, per_page: perPage })
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
  const handleSwitchChange = (checked, idx, field) => {
    const post = data[idx]
    const updatedPost = { ...post, [field]: checked ? 'yes' : 'no' }

    const updateFunction = field === 'isActive' ? API.updateIsActive : API.updateIsBreaking

    updateFunction({ postId: post.id, [field]: checked ? 'yes' : 'no' })
      .then(() => {
        const newData = [...data]
        newData[idx] = updatedPost
        setData(newData)
        showNotification({
          message: 'Post updated successfully',
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
  }

  const onEditPost = (id) => {
    setSelectID(id)
    setEditModalState(!editModalState)
  }

  const onDeletePost = (id) => {
    swal
      .fire({
        title: 'Do you want to delete this Post?',
        text: 'It would not be recovered any more.',
        icon: 'question',
        customClass: {
          confirmButton: `btn btn-primary w-xs mt-2`,
        },
      })
      .then((res) => {
        if (res.isConfirmed)
          API.deletePost(data[id].id)
            .then(() => {
              getTableData()
              showNotification({
                message: 'Post deleted successfully',
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
                  <Button variant="primary" onClick={() => setAddModalState(!addModalState)}>
                    <IconifyIcon icon="bx:plus" className="me-1" />
                    Add Post
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
                        <th className="border-0 py-2" style={{ textAlign: 'center' }}>
                          Title
                        </th>
                        <th className="border-0 py-2" style={{ textAlign: 'center' }}>
                          Category
                        </th>
                        <th className="border-0 py-2" style={{ textAlign: 'center' }}>
                          Parent Category
                        </th>
                        <th className="border-0 py-2" style={{ textAlign: 'center' }}>
                          Author
                        </th>
                        <th className="border-0 py-2" style={{ textAlign: 'center' }}>
                          IsActive
                        </th>
                        <th className="border-0 py-2" style={{ textAlign: 'center' }}>
                          IsPopular
                        </th>
                        <th className="border-0 py-2" style={{ textAlign: 'center' }}>
                          IsBreaking
                        </th>
                        <th className="border-0 py-2" style={{ textAlign: 'center' }}>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((post, idx) => (
                        <tr key={idx}>
                          <td style={{ textAlign: 'center' }}>#{post.id}</td>
                          <td style={{ textAlign: 'center' }}>{post.title.slice(0, 40) + '...'}</td>
                          <td style={{ textAlign: 'center' }}>{post.category_name}</td>
                          <td style={{ textAlign: 'center' }}>{post.parent_name}</td>
                          <td style={{ textAlign: 'center' }}>{post.author || 'Admin'}</td>
                          <td style={{ textAlign: 'center' }}>
                            <Switch
                              onChange={(checked) => handleSwitchChange(checked, idx, 'isActive')}
                              checked={post.isActive === 'yes'}
                              onColor="#007bff"
                            />
                          </td>
                          <td style={{ textAlign: 'center' }}>{post.isPopular ? 'Yes' : 'No'}</td>
                          <td style={{ textAlign: 'center' }}>
                            <Switch
                              onChange={(checked) => handleSwitchChange(checked, idx, 'isBreaking')}
                              checked={post.isBreaking === 'yes'}
                              onColor="#007bff"
                            />
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <Button variant="info" size="sm" type="button" className="me-2" onClick={() => onEditPost(idx)}>
                              <IconifyIcon icon="bx:edit" className="fs-16" />
                            </Button>
                            <Button variant="soft-danger" size="sm" type="button" onClick={() => onDeletePost(idx)}>
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
      <AddPostModal show={addModalState} reloadData={getTableData} toggle={() => setAddModalState(!addModalState)} />
      {selectedID != null && (
        <>
          <EditPostModal
            show={editModalState}
            defaultData={data[selectedID]}
            reloadData={getTableData}
            toggle={() => setEditModalState(!editModalState)}
          />
        </>
      )}
    </>
  )
})

export default Table
