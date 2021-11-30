import axios from 'axios'

const client = axios.create({
  withCredentials: true,
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_SERVER_URL + '/api'
      : 'http://localhost:4000/api',
})

export default client
