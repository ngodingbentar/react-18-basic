import { useEffect, useState } from "react"
import { getUsername } from "../services/auth.service"

export function useLogin () {
  const [username, setUsername] = useState(null)
  const token = localStorage.getItem('token')

  useEffect(() => {
    if(token) {
      setUsername(getUsername(token))
    } else {
      window.location.href = '/login'
    }
  }, [])

  return username
}