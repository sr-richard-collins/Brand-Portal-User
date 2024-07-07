import axios from '@/helpers/axiosConfig'

const getEmployee = (filter) => {
  return axios.post('/getEmployees', filter)
}
const addEmployee = (params) => {
  return axios.post('/addEmployee', params)
}
const deleteEmployee = (id) => {
  return axios.delete('/deleteEmployee', {
    params: { id },
  })
}
const updateEmployee = (params) => {
  return axios.post('/updateEmployee', params)
}
const updatePassword = (params) => {
  return axios.post('/updateEmployeePassword', params)
}
const getEmployeeStates = () => {
  return axios.get('/getEmployeeCount')
}
const getRoles = () => {
  return axios.get('/getRoleList')
}
const getTotalPage = (perPage) => {
  return axios.post('/getEmployeeTotalPage', perPage)
}
export { getEmployee, deleteEmployee, updateEmployee, updatePassword, addEmployee, getRoles, getEmployeeStates, getTotalPage }
