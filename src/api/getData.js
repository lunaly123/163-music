import axios from 'axios'
import config from './config'
import responseData from './filterData'

// https://binaryify.github.io/NeteaseCloudMusicApi/#/
axios.defaults.baseURL = 'http://localhost:3000'

axios.interceptors.response.use(({ data }) => {
  return responseData(data)
})

export default function request(option) {
  let defaults = {
    method: 'get',
    path: '',
    params: {}
  }
  Object.assign(defaults, option)
  return axios[defaults.method](config[defaults.path], {
    params: defaults.params
  })
}
