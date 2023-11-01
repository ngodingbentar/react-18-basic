import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Elements/Button/Index'
import CardProduct from '../components/Fragments/CardProduct'
import DataJson from '../assets/products.json'

function ProductsPage() {
  const data = DataJson.products
  const email = localStorage.getItem('email')

  function handleLogout () {
    console.log('logout')
    localStorage.clear()
    window.location.href = '/login'
  }
  return (
    <>
      <div className='flex justify-end h-20 bg-gray-200 items-center px-10 '>
        {email}
        <Button classname="ml-4 bg-gray-950" onClick={handleLogout}>Logout</Button>
      </div>
      <div className='flex justify-center py-5 flex-wrap'>
        {data.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header />
            <CardProduct.Body title={product.title}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  )
}

export default ProductsPage