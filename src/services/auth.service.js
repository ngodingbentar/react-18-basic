import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

export function login (data, callback) {
  axios.post('https://fakestoreapi.com/auth/login', data)
    .then((res) => {
      // console.log(res)
      callback(true, res.data.token)
    })
    .catch((err) => {
      // console.log(err)
      callback(false, err)
    })
}

export function getUsername (token) {
  const decoded = jwtDecode(token)
  console.log('decoded.user', decoded.user)
  return decoded.user
}