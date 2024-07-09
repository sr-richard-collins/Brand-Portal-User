import axios from '@/helpers/axiosConfig'

const getEmployee = (filter) => {
  return axios.get('/getEmployeeCount', filter)
}
const getPosts = (filter) => {
  return axios.get('/getPostsCount', filter)
}
export { getEmployee, getPosts }
