import axios from 'axios'
import { API_URL } from '../../config'

export const axiosAuthClient = axios.create({
  baseURL: `${API_URL}/`,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
})
