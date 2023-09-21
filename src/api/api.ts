import axios from "axios"

const baseURL = process.env.REACT_APP_PUBLIC_URL

export const instance = axios.create({
  withCredentials: true,
  baseURL,
})

instance.interceptors.request.use(async (config) => {
  if (config.headers && process.env.REACT_APP_TOKEN) {
    config.headers.Authorization = `Bearer ${process.env.REACT_APP_TOKEN}`
  }
  return config
})
