import PageBreadcrumb from '@/components/layout/PageBreadcrumb'
import { Col, Row, Card, Container } from 'react-bootstrap'
import '../../assets/scss/mystyle.scss'

export default function Home() {
  return (
    <>
      <Container>
        <Row className="centered-row">
          <Col xs={9}>
            <Card>
              <Card.Body>Content</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
