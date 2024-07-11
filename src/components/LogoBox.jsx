import { Link } from 'react-router-dom'
import logoDark from '@/assets/images/logo-dark.png'
import logoLight from '@/assets/images/logo-light.png'
import logoSm from '@/assets/images/logo-sm.png'
const LogoBox = ({ containerClassName, squareLogo, textLogo }) => {
  return (
    <div className={(containerClassName ?? '') + ' logo-container'}>
      <Link to="/" className="logo-dark">
        {/* <img src={logoSm} className={squareLogo?.className} height={squareLogo?.height ?? 30} width={squareLogo?.width ?? 19} alt="logo sm" /> */}
        <img src={logoDark} className={textLogo?.className} height={textLogo?.height ?? 70} width="75px" alt="logo dark" />
      </Link>
      <Link to="/" className="logo-light">
        <img src={logoLight} className={textLogo?.className} height={textLogo?.height ?? 50} width="75px" alt="logo light" />
      </Link>
    </div>
  )
}
export default LogoBox
