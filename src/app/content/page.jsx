import React, { useEffect, useState } from 'react'
import { Col, Row, Card, Container } from 'react-bootstrap'
import Editor1 from './components/editor1'
import Editor2 from './components/editor2'
import axios from '../../helpers/axiosConfig'
import './components/editor1.css'
import '../../assets/scss/mystyle.scss'

export default function Home() {
  const [editor1, setEditor1] = useState('')

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get('/getContent', { params: { id: '2' } })
        setEditor1(response.data)
      } catch (error) {
        console.error('Error fetching content', error)
      }
    }

    fetchContent()
  }, [])

  return (
    <>
      <Container>
        <Row className="centered-row">
          <Col>
            <Card>
              <Card.Body>
                {editor1 ? <Editor1 editorText={editor1.editor1_text} editorImg={JSON.parse(editor1.editor1_img)} /> : ''}
                {editor1 ? <Editor1 editorText={editor1.editor1_text} editorImg={JSON.parse(editor1.editor1_img)} /> : ''}
                {editor1 ? <Editor2 editorText={editor1.editor1_text} editorImg={JSON.parse(editor1.editor1_img)} /> : ''}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
