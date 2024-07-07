import { Link } from 'react-router-dom'
import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import avatar2 from '@/assets/images/users/default-avatar2.jpeg'
const ProfileDropdown = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <Dropdown className="topbar-item" align={'end'}>
      <DropdownToggle
        as="button"
        type="button"
        className="topbar-button content-none"
        id="page-header-user-dropdown"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <span className="d-flex align-items-center">
          <img
            className="rounded-circle"
            width={32}
            height={32}
            src={user === null ? avatar2 : user.avatar ? user.avatar : `https://api.adorable.io/avatars/32/${user.name[0]}.png`}
            alt="avatar-3"
          />
        </span>
      </DropdownToggle>
      <DropdownMenu>
        {user !== null ? (
          <>
            <DropdownHeader as="h6">Welcome Admin!</DropdownHeader>
            <DropdownItem as={Link} to="/profile">
              <IconifyIcon icon="bx:user-circle" className="text-muted fs-18 align-middle me-1" />
              <span className="align-middle">Profile</span>
            </DropdownItem>
            <DropdownItem as={Link} className="text-danger" to="/sign-in">
              <IconifyIcon icon="bx:log-out" className="fs-18 align-middle me-1" />
              <span className="align-middle">Sign out</span>
            </DropdownItem>
          </>
        ) : (
          <>
            <DropdownItem as={Link} className="text-muted" to="/sign-in">
              <IconifyIcon icon="bx:log-in" className="fs-18 align-middle me-1" />
              <span className="align-middle">Sign in</span>
            </DropdownItem>
            <DropdownItem as={Link} className="text-muted" to="/sign-up">
              <IconifyIcon icon="bx:registered" className="fs-18 align-middle me-1" />
              <span className="align-middle">Sign up</span>
            </DropdownItem>
          </>
        )}
      </DropdownMenu>
    </Dropdown>
  )
}
export default ProfileDropdown
