import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Elements/Button/Index'
import CardProduct from '../components/Fragments/CardProduct'
import DataJson from '../assets/products.json'

function ProductsPage() {
  const data = DataJson.products
  return (
    <div className='flex justify-center py-5 flex-wrap'>
      {data.map((product) => (
        <CardProduct>
          <CardProduct.Header />
          <CardProduct.Body title={product.title}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  )
}

export default ProductsPage