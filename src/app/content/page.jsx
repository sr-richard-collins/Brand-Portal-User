import React, { useEffect, useState } from 'react'
import { Col, Row, Card, Container } from 'react-bootstrap'
import Editor1 from './components/editor1'
import Editor2 from './components/editor2'
import axios from '../../helpers/axiosConfig'
import './components/editor1.css'
import '../../assets/scss/mystyle.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthContext } from '@/context/useAuthContext'

const Content = () => {
  const [editors, setEditors] = useState([])
  const { name } = useParams()
  const { isAuthenticated } = useAuthContext()

  const navigate = useNavigate()
  useEffect(() => {
    console.log(name)
    const fetchContent = async () => {
      try {
        const statusResponse = await axios.get('/getMenuStatus', { params: { id: name } })
        if (statusResponse.data === 'disable' && !isAuthenticated) navigate('/sign-in')
        const response = await axios.get('/getContent', { params: { id: name } })
        setEditors(response.data)
      } catch (error) {
        setEditors([])
        console.error('Error fetching content', error)
      }
    }

    fetchContent()
  }, [name])

  return (
    <>
      <Container>
        <Row className="centered-row">
          <Col>
            <Card>
              <Card.Body>
                {editors.map((editor) => {
                  const EditorComponent = editor.type === 'downloadable' ? Editor2 : Editor1
                  return (
                    <EditorComponent
                      key={editor.id}
                      editorText={editor.editor_text}
                      editorImg={editor.editor_img === '[]' ? [] : JSON.parse(editor.editor_img)}
                    />
                  )
                })}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Content
