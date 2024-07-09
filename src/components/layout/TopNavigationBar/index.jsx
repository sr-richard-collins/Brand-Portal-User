import { lazy } from 'react'
import LeftSideBarToggle from './components/LeftSideBarToggle'
import ProfileDropdown from './components/ProfileDropdown'
import LogoBox from '@/components/LogoBox'
const AppsDropdown = lazy(() => import('./components/AppsDropdown'))
const Notifications = lazy(() => import('./components/Notifications'))
const TopNavigationBar = () => {
  return (
    <header className="topbar">
      <div className="navbar-header">
        <div className="d-flex align-items-center gap-2">
          <LogoBox
            containerClassName="logo-box"
            squareLogo={{
              className: 'logo-sm',
            }}
            textLogo={{
              className: 'logo-lg',
            }}
          />

          <LeftSideBarToggle />

          {/* <SearchBox /> */}
        </div>
        <div className="d-flex align-items-center gap-1" style={{ marginRight: '60px' }}>
          <ProfileDropdown />
        </div>
      </div>
    </header>
  )
}
export default TopNavigationBar
