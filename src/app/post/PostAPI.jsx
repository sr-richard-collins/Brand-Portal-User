import axios from '@/helpers/axiosConfig'

const getPosts = (filter) => {
  return axios.post('/getPosts', filter)
}
const addPost = (params) => {
  return axios.post('/savePost', params)
}
const deletePost = (id) => {
  return axios.delete('/deletePost', {
    params: { id },
  })
}
const updatePost = (params) => {
  return axios.post('/savePost', params)
}
const updateIsActive = (params) => {
  return axios.post('/updateIsActive', params)
}
const updateIsBreaking = (params) => {
  return axios.post('/updateIsBreaking', params)
}
const getTotalPage = (perPage) => {
  return axios.post('/getPostTotalPage', perPage)
}
const getCategoryList = () => {
  return axios.get('/category')
}
export { getPosts, deletePost, updatePost, updateIsActive, updateIsBreaking, addPost, getCategoryList, getTotalPage }
