import { Suspense } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Preloader from '@/components/Preloader';
const AuthLayout = ({
  children
}) => {
  return <div className="authentication-bg">
      <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col xl={12}>
              <Suspense fallback={<Preloader />}>{children}</Suspense>
            </Col>
          </Row>
        </Container>
      </div>
    </div>;
};
export default AuthLayout;