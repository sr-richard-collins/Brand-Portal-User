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
  const [editor, setEditor] = useState(null)
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
        setEditor(response.data)
      } catch (error) {
        setEditor(null)
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
                {editor ? <Editor1 editorText={editor.editor1_text} editorImg={JSON.parse(editor.editor1_img)} /> : ''}
                {editor ? <Editor1 editorText={editor.editor2_text} editorImg={JSON.parse(editor.editor2_img)} /> : ''}
                {editor ? <Editor2 editorText={editor.editor3_text} editorImg={JSON.parse(editor.editor3_img)} /> : ''}
                {editor ? <Editor2 editorText={editor.editor4_text} editorImg={JSON.parse(editor.editor4_img)} /> : ''}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Content
