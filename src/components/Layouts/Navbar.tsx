import React, { useEffect, useState } from 'react'
import Button from '../Elements/Button/Index'
import { useLogin } from '../../hooks/useLogin'
import { useSelector } from 'react-redux'

function Navbar() {
  const username = useLogin()
  const [totalCart, setTotalCart] = useState(0)
  const cart = useSelector((state) => state?.cart?.data)

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty
    }, 0)
    setTotalCart(sum)
  }, [cart])

  function handleLogout () {
    localStorage.clear()
    window.location.href = '/login'
  }
  return (
      <div className='flex justify-end h-20 bg-gray-200 items-center px-10 '>
        {username}
        <Button classname="ml-4 bg-gray-950" onClick={handleLogout}>Logout</Button>
        <div className='flex items-center bg-gray-600 p-2 rounded-md ml-5 text-white'>{ totalCart }</div>
      </div>
  )
}

export default Navbar