import clsx from 'clsx'
import { Fragment, useCallback, useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { findAllParent, findMenuItem, getMenuItemFromURL } from '@/helpers/menu'

const MenuItemWithChildren = ({ item, className, linkClassName, subMenuClassName, activeMenuItems, toggleMenu, labelStyle }) => {
  const [open, setOpen] = useState(activeMenuItems.includes(item.key))

  useEffect(() => {
    console.log('A', activeMenuItems)
    console.log(item.key.replaceAll('-', ' '))
    console.log(activeMenuItems.includes(item.key.replaceAll('-', ' ')))
    setOpen(activeMenuItems.includes(item.key.replaceAll('-', ' ')))
  }, [activeMenuItems, item])

  const toggleMenuItem = (e) => {
    e.preventDefault()
    const status = !open
    setOpen(status)
    if (toggleMenu) toggleMenu(item, status)
    return false
  }

  const getActiveClass = useCallback(
    (item) => {
      return activeMenuItems?.includes(item.key) ? 'active' : ''
    },
    [activeMenuItems],
  )

  return (
    <li className={className}>
      <div onClick={toggleMenuItem} aria-expanded={open} role="button" className={clsx(linkClassName)}>
        {item.icon && (
          <span className="nav-icon">
            <IconifyIcon icon={item.icon} />
          </span>
        )}
        <span className="nav-text" style={labelStyle}>
          {item.label}
        </span>
        {!item.badge ? (
          <IconifyIcon icon="bx:chevron-down" className="menu-arrow" />
        ) : (
          <span className={`badge badge-pill text-end bg-${item.badge.variant}`}>{item.badge.text}</span>
        )}
      </div>
      <Collapse in={open}>
        <div>
          <ul className={clsx(subMenuClassName)}>
            {(item.children || []).map((child, idx) => {
              const childLabelStyle = child.status === 'disable' ? { color: 'grey' } : {}
              return (
                <Fragment key={child.key + idx}>
                  {child.children ? (
                    <MenuItemWithChildren
                      item={child}
                      linkClassName={clsx('nav-link', getActiveClass(child))}
                      activeMenuItems={activeMenuItems}
                      className="sub-nav-item"
                      subMenuClassName="nav sub-navbar-nav"
                      toggleMenu={toggleMenu}
                      labelStyle={childLabelStyle}
                    />
                  ) : (
                    <MenuItem
                      item={child}
                      className="sub-nav-item"
                      linkClassName={clsx('sub-nav-link', getActiveClass(child))}
                      labelStyle={childLabelStyle}
                    />
                  )}
                </Fragment>
              )
            })}
          </ul>
        </div>
      </Collapse>
    </li>
  )
}

// MenuItem component
const MenuItem = ({ item, className, linkClassName, labelStyle }) => {
  return (
    <li className={className}>
      <MenuItemLink item={item} className={linkClassName} labelStyle={labelStyle} />
    </li>
  )
}

// MenuItemLink component
const MenuItemLink = ({ item, className, labelStyle }) => {
  return (
    <Link
      to={item.url ?? ''}
      target={item.target}
      className={clsx(className, {
        disabled: item.isDisabled,
      })}
      style={labelStyle}>
      {item.icon && (
        <span className="nav-icon">
          <IconifyIcon icon={item.icon} />
        </span>
      )}
      <span className="nav-text">{item.label}</span>
      {item.badge && <span className={`badge badge-pill text-end bg-${item.badge.variant}`}>{item.badge.text}</span>}
    </Link>
  )
}
const AppMenu = ({ menuItems }) => {
  const { pathname } = useLocation()
  const [activeMenuItems, setActiveMenuItems] = useState([])
  let lastSection = null

  const toggleMenu = (menuItem, show) => {
    if (show) setActiveMenuItems([menuItem.key, ...findAllParent(menuItems, menuItem)])
  }
  const getActiveClass = useCallback(
    (item) => {
      return activeMenuItems?.includes(item.key) ? 'active' : ''
    },
    [activeMenuItems],
  )
  const activeMenu = useCallback(() => {
    const trimmedURL = pathname?.replaceAll('', '')
    const matchingMenuItem = getMenuItemFromURL(menuItems, trimmedURL)
    if (matchingMenuItem) {
      const activeMt = findMenuItem(menuItems, matchingMenuItem.key)
      if (activeMt) {
        setActiveMenuItems([activeMt.key, ...findAllParent(menuItems, activeMt)])
      }
      setTimeout(() => {
        const activatedItem = document.querySelector(`#leftside-menu-container .simplebar-content a[href="${trimmedURL}"]`)
        if (activatedItem) {
          const simplebarContent = document.querySelector('#leftside-menu-container .simplebar-content-wrapper')
          if (simplebarContent) {
            const offset = activatedItem.offsetTop - window.innerHeight * 0.4
            scrollTo(simplebarContent, offset, 600)
          }
        }
      }, 400)

      // scrollTo (Left Side Bar Active Menu)
      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2
        if (t < 1) return (c / 2) * t * t + b
        t--
        return (-c / 2) * (t * (t - 2) - 1) + b
      }
      const scrollTo = (element, to, duration) => {
        const start = element.scrollTop,
          change = to - start,
          increment = 20
        let currentTime = 0
        const animateScroll = function () {
          currentTime += increment
          const val = easeInOutQuad(currentTime, start, change, duration)
          element.scrollTop = val
          if (currentTime < duration) {
            setTimeout(animateScroll, increment)
          }
        }
        animateScroll()
      }
    }
  }, [pathname, menuItems])
  useEffect(() => {
    if (menuItems && menuItems.length > 0) activeMenu()
  }, [activeMenu, menuItems])
  return (
    <ul className="navbar-nav">
      {(menuItems || []).map((item, idx) => {
        const showSection = item.section !== lastSection
        if (showSection) {
          lastSection = item.section
        }
        const labelStyle = item.status === 'disable' ? { color: 'grey' } : {}
        return (
          <Fragment key={item.key + idx}>
            {showSection && (
              <li className="section-title" style={{ margin: '10px' }}>
                {item.section.toUpperCase()}
              </li>
            )}
            {item.isTitle ? (
              <li className="menu-title" style={labelStyle}>
                {item.label}
              </li>
            ) : (
              <>
                {item.children ? (
                  <MenuItemWithChildren
                    item={item}
                    toggleMenu={toggleMenu}
                    className="nav-item"
                    linkClassName={clsx('nav-link', getActiveClass(item))}
                    subMenuClassName="nav sub-navbar-nav"
                    activeMenuItems={activeMenuItems}
                    labelStyle={labelStyle}
                  />
                ) : (
                  <MenuItem item={item} linkClassName={clsx('nav-link', getActiveClass(item))} className="nav-item" labelStyle={labelStyle} />
                )}
              </>
            )}
          </Fragment>
        )
      })}
    </ul>
  )
}
export default AppMenu
