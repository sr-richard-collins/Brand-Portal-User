import { Link } from 'react-router-dom';
import * as yup from 'yup';
import PasswordFormInput from '@/components/form/PasswordFormInput';
import TextFormInput from '@/components/form/TextFormInput';
import { Button } from 'react-bootstrap';
import useSignIn from './useSignIn';
export const loginSchema = yup.object({
  email: yup.string().email('Please enter a valid email').required('please enter your email'),
  password: yup.string().required('Please enter your password')
});
const LoginForm = () => {
  const {
    loading,
    login,
    control
  } = useSignIn();
  return <form onSubmit={login} className="authentication-form">
    <TextFormInput control={control} name="email" containerClassName="mb-3" label="Email" id="email-id" placeholder="Enter your email" />

    <PasswordFormInput control={control} name="password" containerClassName="mb-3" placeholder="Enter your password" id="password-id" label={<>
      <Link to="/auth/reset-pass" className="float-end text-muted text-unline-dashed ms-1">
        Reset password
      </Link>
      <label className="form-label" htmlFor="example-password">
        Password
      </label>
    </>} />

    {/* <div className="mb-3">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="checkbox-signin" />
          <label className="form-check-label" htmlFor="checkbox-signin">
            Remember me
          </label>
        </div>
      </div> */}
    <div className="mb-1 text-center d-grid">
      <Button variant="primary" type="submit" disabled={loading}>
        Sign In
      </Button>
    </div>
  </form>;
};
export default LoginForm;