import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LogoBox from '@/components/LogoBox'
import PageMetaData from '@/components/PageTitle'
import ThirdPartyAuth from '@/components/ThirdPartyAuth'
import LoginForm from './LoginForm'
import signInImg from '@/assets/images/sign-in.svg'
const SignIn = () => {
  return (
    <>
      <PageMetaData title="Sign In" />

      <Card className="auth-card">
        <CardBody className="p-0">
          <Row className="align-items-center g-0">
            <Col lg={6} className="d-none d-lg-inline-block border-end">
              <div className="auth-page-sidebar">
                <img src={signInImg} width={521} height={521} alt="auth" className="img-fluid" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="p-4">
                <div className="mx-auto mb-4 text-center auth-logo">
                  <LogoBox
                    textLogo={{}}
                    squareLogo={{
                      className: 'me-1',
                    }}
                    containerClassName="mx-auto mb-4 text-center auth-logo"
                  />
                </div>
                <h2 className="fw-bold text-center fs-18">Sign In</h2>
                <p className="text-muted text-center mt-1 mb-4">Enter your email address and password to access admin panel.</p>
                <Row className="justify-content-center">
                  <Col xs={12} md={8}>
                    <LoginForm />

                    {/* <ThirdPartyAuth /> */}
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <p className="text-white mb-0 text-center">
        Don&apos;t have an account?
        <Link to="/sign-up" className="text-white fw-bold ms-1">
          Sign Up
        </Link>
        &nbsp;or
        <Link to="/" className="text-white fw-bold ms-1">
          Home
        </Link>
      </p>
    </>
  )
}
export default SignIn
