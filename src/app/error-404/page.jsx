import { Link } from 'react-router-dom';
import LogoBox from '@/components/LogoBox';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
const Error404 = () => {
  return <Card className="auth-card">
      <CardBody className="p-0">
        <Row className="align-items-center g-0">
          <Col lg={6} className="d-none d-lg-inline-block border-end">
            <div className="auth-page-sidebar">
              <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="auth" className="img-fluid" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="p-4">
              <div className="mx-auto mb-4 text-center">
                <LogoBox containerClassName="mx-auto text-center auth-logo" textLogo={{
                height: 24,
                width: 72
              }} squareLogo={{
                className: 'me-1'
              }} />
                <h1 className="mt-5 mb-3 fw-bold fs-60">404</h1>
                <h2 className="fs-22 lh-base">Page Not Found !</h2>
                <p className="text-muted mt-1 mb-4">
                  The page you&apos;re trying to reach seems to have gone
                  <br />
                  missing in the digital wilderness.
                </p>
                <div className="text-center">
                  <Link to="/" className="btn btn-success">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>;
};
export default Error404;