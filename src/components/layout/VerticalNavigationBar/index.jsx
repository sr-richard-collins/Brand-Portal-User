import React, { useEffect, useState } from 'react'
import { lazy, Suspense } from 'react'
import FallbackLoading from '@/components/FallbackLoading'
import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient'
import HoverMenuToggle from './components/HoverMenuToggle'
import axios from '../../../helpers/axiosConfig'
const AppMenu = lazy(() => import('./components/AppMenu'))

const fetchMenuItems = async () => {
  try {
    const response = await axios.get('/getMenu')
    return response.data
  } catch (error) {
    console.error('Error fetching menu items:', error)
    return []
  }
}

const processMenuItems = (data, parentKey = '') => {
  return data.map((item) => {
    const itemKey = parentKey ? `${parentKey}-${item.name}` : item.name

    return {
      key: itemKey,
      label: item.name,
      section: item.section_name,
      status: item.status,
      ...(item.children ? {} : { url: `/${item.name.replaceAll(' ', '-')}` }),
      ...(item.children ? {} : { parentKey: parentKey }),
      children: item.children ? processMenuItems(item.children, itemKey) : undefined,
    }
  })
}

const VerticalNavigationBar = () => {
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    const getMenuItems = async () => {
      const fetchedMenuItems = await fetchMenuItems()
      const processedMenuItems = processMenuItems(fetchedMenuItems, '')
      setMenuItems(processedMenuItems)
    }

    getMenuItems()
  }, [])
  return (
    <div className="main-nav" id="leftside-menu-container" style={{ marginTop: '70px' }}>
      <HoverMenuToggle />
      <SimplebarReactClient className="scrollbar">
        <Suspense fallback={<FallbackLoading />}>
          <AppMenu menuItems={menuItems} />
        </Suspense>
      </SimplebarReactClient>
    </div>
  )
}
export default VerticalNavigationBar
