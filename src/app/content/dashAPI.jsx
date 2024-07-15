import axios from '@/helpers/axiosConfig'

const getContent = (filter) => {
  return axios.get('/getContent', filter)
}

export { getContent }
