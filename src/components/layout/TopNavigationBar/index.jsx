import { lazy } from 'react'
import { Suspense } from 'react'
import ActivityStreamToggle from './components/ActivityStreamToggle'
import LeftSideBarToggle from './components/LeftSideBarToggle'
import ProfileDropdown from './components/ProfileDropdown'
import SearchBox from './components/SearchBox'
import ThemeCustomizerToggle from './components/ThemeCustomizerToggle'
import ThemeModeToggle from './components/ThemeModeToggle'
const AppsDropdown = lazy(() => import('./components/AppsDropdown'))
const Notifications = lazy(() => import('./components/Notifications'))
const TopNavigationBar = () => {
  return (
    <header className="topbar">
      <div className="navbar-header">
        <div className="d-flex align-items-center gap-2">
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
