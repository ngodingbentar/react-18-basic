import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Elements/Button/Index'
import CardProduct from '../components/Fragments/CardProduct'

function ProductsPage() {
  return (
    <div className='flex justify-center'>
      <CardProduct>
        <CardProduct.Header />
        <CardProduct.Body title="produk 1a">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eos.
        </CardProduct.Body>
        <CardProduct.Footer />
      </CardProduct>
    </div>
  )
}

export default ProductsPage