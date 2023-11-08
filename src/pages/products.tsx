import React, { useEffect, useRef, useState } from 'react'
import CardProduct from '../components/Fragments/CardProduct'
import { getAllProducts } from '../services/product.service'
import { useLogin } from '../hooks/useLogin'
import TableCart from '../components/Fragments/TableCart'
import Navbar from '../components/Layouts/Navbar'

function ProductsPage() {
  const [products, setProducts] = useState([])
  useLogin()

  useEffect(() => {
    getAllProducts((data) => {
      setProducts(data)
    })
  },[])

  return (
    <>
      <div className='flex py-5 '>
        <div className="w-2/3 flex justify-center flex-wrap">
          {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} id={product.id} />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/3">
          <TableCart products={products} />
        </div>
      </div>
    </>
  )
}

export default ProductsPage