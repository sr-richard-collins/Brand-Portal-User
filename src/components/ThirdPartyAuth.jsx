import { Button } from 'react-bootstrap';
import IconifyIcon from './wrappers/IconifyIcon';
const ThirdPartyAuth = () => {
  return <>
      <p className="mt-3 fw-semibold no-span">OR sign with</p>
      <div className="text-center d-flex gap-1 justify-content-center">
        <Button variant="light" className="shadow-none">
          <IconifyIcon icon="bxl:google" height={20} width={20} />
        </Button>
        <Button variant="light" className="shadow-none">
          <IconifyIcon icon="bxl:facebook" height={20} width={20} />
        </Button>
        <Button variant="light" className="shadow-none">
          <IconifyIcon icon="bxl:github" height={20} width={20} />
        </Button>
      </div>
    </>;
};
export default ThirdPartyAuth;