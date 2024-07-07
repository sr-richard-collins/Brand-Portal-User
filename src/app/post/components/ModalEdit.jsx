import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Tab, Tabs, Button, Modal, Row, ModalBody, ModalFooter, ModalHeader, Col, CardBody, CardTitle } from 'react-bootstrap'
import ReactQuill from 'react-quill'
import TextFormInput from '@/components/form/TextFormInput'
import SelectFormInput from '@/components/form/SelectFormInput'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { useNotificationContext } from '@/context/useNotificationContext'
import * as API from '../PostAPI'
import { IMAGE_BASE_URL } from '@/helpers/axiosConfig'

import 'react-quill/dist/quill.snow.css'

const formSteps = [
  {
    index: 1,
    name: 'Base Info',
    icon: 'bxs:book',
    tab: <br />,
  },
  {
    index: 2,
    name: 'SEO Info',
    icon: 'bx:link',
    tab: <br />,
  },
]

const EditPostModal = ({ show, toggle, reloadData, defaultData }) => {
  const [activeStep, setActiveStep] = useState(1)
  const { showNotification } = useNotificationContext()
  const [productDescriptionContent, setProductDescriptionContent] = useState(defaultData.description)
  const { control, handleSubmit, reset } = useForm({
    defaultValues: { ...defaultData },
  })
  const [categoryList, setCategoryList] = useState([])

  const [imagePreview, setImagePreview] = useState('./unknown.png')
  const [imageFile, setImageFile] = useState(null)
  const handleChange = (e) => {
    const { files } = e.target
    if (files && files.length > 0) {
      setImageFile(files[0])
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(files[0])
    }
  }
  useEffect(() => {
    API.getCategoryList()
      .then((res) => {
        setCategoryList(
          res.data.map((category) => {
            return { value: category.id, label: category.name }
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

  useEffect(() => {
    reset(defaultData)
    setProductDescriptionContent(defaultData.description)
    setImagePreview(defaultData.img ? IMAGE_BASE_URL + defaultData.img : './unknown.png')
  }, [defaultData, reset])

  const editPost = handleSubmit(async (values) => {
    const formData = new FormData()
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value)
    })
    const user = JSON.parse(localStorage.getItem('user'))
    formData.append('user_id', user.id)
    formData.append('message', productDescriptionContent)
    formData.append('id', defaultData.id)
    if (imageFile) formData.append('image', imageFile)
    API.updatePost(formData)
      .then(() => {
        reloadData()
        showNotification({
          message: 'Successfully Changed',
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
    <Modal show={show} onHide={toggle} className="fade" centered size="xl">
      <ModalHeader>
        <h5 className="modal-title" id="exampleModalCenterTitle">
          Edit Post
        </h5>
        <button type="button" className="btn-close" onClick={toggle} />
      </ModalHeader>

      <ModalBody>
        <Tabs variant="underline" activeKey={activeStep} className="nav nav-tabs card-tabs" onSelect={(e) => setActiveStep(Number(e))}>
          {formSteps.map((step) => (
            <Tab
              key={step.index}
              eventKey={step.index}
              className="nav-item"
              tabClassName="pb-3"
              title={
                <span className="fw-semibold">
                  <IconifyIcon icon={step.icon} className="me-1" />
                  <span className="d-none d-sm-inline">{step.name}</span>
                </span>
              }>
              <>{step.tab}</>
            </Tab>
          ))}
        </Tabs>
        <form className="row g-3" onSubmit={editPost}>
          {activeStep === 1 && (
            <Row className="d-flex justify-content-center align-items-center">
              <TextFormInput name="title" label="Title" placeholder="Enter Title" containerClassName="mb-3" control={control} required />
              <TextFormInput name="subTitle" label="Subtitle" placeholder="Enter Subtitle" containerClassName="mb-3" control={control} required />
              <Col lg={6}>
                <SelectFormInput control={control} name="category_id" label="Category" containerClassName="mb-3" required options={categoryList} />
              </Col>
              <Col lg={6}>
                <SelectFormInput
                  control={control}
                  name="isBreaking"
                  label="Breaking"
                  containerClassName="mb-3"
                  required
                  options={[
                    {
                      value: 'yes',
                      label: 'Yes',
                    },
                    {
                      value: 'no',
                      label: 'No',
                    },
                  ]}
                />
              </Col>
              <Col lg={12}>
                <div className="mb-5">
                  <label className="form-label">Product Description</label>
                  <ReactQuill
                    theme="snow"
                    style={{
                      height: 195,
                    }}
                    className="pb-sm-3 pb-5 pb-xl-0"
                    modules={{
                      toolbar: [
                        [
                          {
                            font: [],
                          },
                          {
                            size: [],
                          },
                        ],
                        ['bold', 'italic', 'underline', 'strike'],
                        [
                          {
                            color: [],
                          },
                          {
                            background: [],
                          },
                        ],
                        [
                          {
                            script: 'super',
                          },
                          {
                            script: 'sub',
                          },
                        ],
                        [
                          {
                            header: [false, 1, 2, 3, 4, 5, 6],
                          },
                          'blockquote',
                          'code-block',
                        ],
                        [
                          {
                            list: 'ordered',
                          },
                          {
                            list: 'bullet',
                          },
                          {
                            indent: '-1',
                          },
                          {
                            indent: '+1',
                          },
                        ],
                        [
                          'direction',
                          {
                            align: [],
                          },
                        ],
                        ['link', 'image', 'video'],
                        ['clean'],
                      ],
                    }}
                    value={productDescriptionContent}
                    onChange={setProductDescriptionContent}
                  />
                </div>
              </Col>
            </Row>
          )}
          {activeStep === 2 && (
            <Row className="d-flex justify-content-center align-items-center">
              <TextFormInput name="seo_title" label="SEO Title" placeholder="Enter SEO Title" containerClassName="mb-3" control={control} required />
              <TextFormInput
                name="seo_keyword"
                label="SEO Keywords"
                placeholder="Enter SEO Keywords"
                containerClassName="mb-3"
                control={control}
                required
              />
              <TextFormInput
                name="seo_description"
                label="SEO Description"
                placeholder="Enter SEO Description"
                containerClassName="mb-3"
                control={control}
                required
              />
              <TextFormInput name="seo_slug" label="SEO Slug" placeholder="Enter SEO Slug" containerClassName="mb-3" control={control} required />
            </Row>
          )}
          <div>
            <CardBody>
              <CardTitle as={'h5'} className="mb-1 anchor" id="overview">
                File Upload
              </CardTitle>
              <div className="d-flex justify-content-center mb-3 mt-3">
                <div
                  className="avatar-title bg-body border border-3 border-dashed-light position-relative ml-3"
                  style={{ width: '120px', height: '120px' }}>
                  <label htmlFor="imageInputRight" className="position-absolute end-0 bottom-0">
                    <div className="cursor-pointer">
                      <span className="avatar-title bg-light text-dark">
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
                  <img id="previewRight" src={imagePreview} alt="Preview Image" style={{ width: '120px', height: '120px' }} />
                </div>
              </div>
              {/* <DropzoneFormInput
                            iconProps={{ icon: 'bx:cloud-upload', height: 36, width: 36 }}
                            text="Drop files here or click to upload."
                            helpText={<span className="text-muted fs-13">
                                (This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
                            </span>}
                            showPreview
                            multiple={false}
                            onChange={handleFileChange}
                        /> */}
            </CardBody>
          </div>
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

export default EditPostModal
