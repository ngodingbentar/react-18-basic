import React, { useContext, useEffect, useState } from 'react'
import Button from '../Elements/Button/Index'
import { useLogin } from '../../hooks/useLogin'
import { useSelector } from 'react-redux'
import { DarkMode } from '../../context/DarkMode'
import { useTotalPrice } from '../../context/TotalPriceContext'

function Navbar() {
  const username = useLogin()
  const [totalCart, setTotalCart] = useState(0)
  const cart = useSelector((state) => state?.cart?.data)
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
  const { total : totalPrice } = useTotalPrice()

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
        <Button classname="ml-4 bg-gray-600" onClick={handleLogout}>Logout</Button>
        <div className='flex items-center bg-gray-600 p-2 rounded-md ml-5 text-white'>Item: { totalCart } | Price: {totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'USD' })}</div>
        <button className='right-4 ml-4 bg-gray-600 p-2 text-white rounded-md' onClick={() => setIsDarkMode(!isDarkMode)}>
          { isDarkMode ? 'Light Mode' : 'Dark Mode' }
        </button>
      </div>
  )
}

export default Navbar