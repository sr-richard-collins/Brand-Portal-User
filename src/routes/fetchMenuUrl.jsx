import { useEffect, useState } from 'react'
import axios from '../helpers/axiosConfig'

const fetchMenuUrl = (url) => {
  const [routes, setRoutes] = useState([])

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get(url)
        const data = response.data
        setRoutes(data)
      } catch (error) {
        console.error('Error fetching routes:', error)
      }
    }

    fetchRoutes()
  }, [url])

  return routes
}

export default fetchMenuUrl
