import React from 'react'
import Button from '../Elements/Button/Index'
import { useLogin } from '../../hooks/useLogin'

function Navbar() {
  const username = useLogin()
  
  function handleLogout () {
    localStorage.clear()
    window.location.href = '/login'
  }
  return (
      <div className='flex justify-end h-20 bg-gray-200 items-center px-10 '>
        {username}
        <Button classname="ml-4 bg-gray-950" onClick={handleLogout}>Logout</Button>
      </div>
  )
}

export default Navbar