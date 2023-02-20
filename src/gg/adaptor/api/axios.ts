import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:4000/',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
})

instance.interceptors.request.use(
  (req) => req,
  (err) => Promise.reject(err)
)
instance.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
)

const makeRequest = (config: AxiosRequestConfig) => instance(config)

export default makeRequest
