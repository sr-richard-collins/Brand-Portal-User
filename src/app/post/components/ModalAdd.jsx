import { useState, useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { Tab, Tabs, Button, Modal, Row, ModalBody, ModalFooter, ModalHeader, Col, Card, CardBody, CardTitle } from 'react-bootstrap'
import ReactQuill from 'react-quill'
import TextFormInput from '@/components/form/TextFormInput'
import SelectFormInput from '@/components/form/SelectFormInput'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import DropzoneFormInput from '@/components/form/DropzoneFormInput'
import { useNotificationContext } from '@/context/useNotificationContext'
import * as API from '../PostAPI'
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

const AddPostModal = ({ show, toggle, reloadData }) => {
  const [activeStep, setActiveStep] = useState(1)
  const { showNotification } = useNotificationContext()
  const [productDescriptionContent, setProductDescriptionContent] = useState(`<h2>Describe about Post</h2>`)
  const { control, handleSubmit, setValue } = useForm()
  const [file, setFile] = useState(null)
  const [categoryList, setCategoryList] = useState([])

  const categoryName = useWatch({
    control,
    name: 'title',
  })

  useEffect(() => {
    if (categoryName) {
      setValue('seo_slug', `${categoryName}`)
    }
  }, [categoryName, setValue])

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
  const addPost = handleSubmit(async (values) => {
    const formData = new FormData()
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value)
    })
    const user = JSON.parse(localStorage.getItem('user'))
    formData.append('user_id', user.id)
    formData.append('message', productDescriptionContent)
    // formData.append('seo_slug', values.seo_slug)
    if (file) {
      formData.append('file', file)
    }
    API.addPost(formData)
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

  const handleFileChange = (acceptedFiles) => {
    setFile(acceptedFiles[0])
  }

  return (
    <Modal show={show} onHide={toggle} className="fade" centered size="xl">
      <ModalHeader>
        <h5 className="modal-title" id="exampleModalCenterTitle">
          Add Post
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
        <form className="row g-3" onSubmit={addPost}>
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
              <TextFormInput name="seo_title" label="SEO Title" placeholder="Enter SEO Title" containerClassName="mb-3" control={control} />
              <TextFormInput name="seo_keyword" label="SEO Keywords" placeholder="Enter SEO Keywords" containerClassName="mb-3" control={control} />
              <TextFormInput
                name="seo_description"
                label="SEO Description"
                placeholder="Enter SEO Description"
                containerClassName="mb-3"
                control={control}
              />
              <TextFormInput name="seo_slug" label="SEO Slug" placeholder="Enter SEO Slug" containerClassName="mb-3" control={control} />
            </Row>
          )}
          <div>
            <CardBody>
              <CardTitle as={'h5'} className="mb-1 anchor" id="overview">
                File Upload
              </CardTitle>
              <DropzoneFormInput
                iconProps={{ icon: 'bx:cloud-upload', height: 36, width: 36 }}
                text="Drop files here or click to upload."
                helpText={
                  <span className="text-muted fs-13">
                    (This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
                  </span>
                }
                showPreview
                multiple={false}
                onChange={handleFileChange}
              />
            </CardBody>
          </div>
          <ModalFooter>
            <Button variant="secondary" type="button" onClick={toggle}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add Post
            </Button>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal>
  )
}

export default AddPostModal
