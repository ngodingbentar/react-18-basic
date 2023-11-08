import React, { useEffect, useRef, useState } from 'react'
import Button from '../components/Elements/Button/Index'
import CardProduct from '../components/Fragments/CardProduct'
import DataJson from '../assets/products.json'
import { getAllProducts } from '../services/product.service'
import { getUsername } from '../services/auth.service'
import { useLogin } from '../hooks/useLogin'
import TableCart from '../components/Fragments/TableCart'

// const products = DataJson.products
const email = localStorage.getItem('email')
const token = localStorage.getItem('token')
interface IProduct {
  id: number,
  qty: number,
}
function ProductsPage() {
  
  // const [cart, setCart] = useState([] as IProduct[])
  // const [totalPrice, setTotalPrice] = useState(0)
  const [products, setProducts] = useState([])
  // const [username, setUsername] = useState(null)
  const username = useLogin()
  
  // function addToCart (id) {
  //   if(cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item2) => item2.id === id ? {...item2, qty: item2.qty + 1} : item2)
  //     )
  //   } else {
  //     setCart([...cart, {
  //       id,
  //       qty: 1
  //     }])
  //   }
  // }
  function handleLogout () {
    localStorage.clear()
    window.location.href = '/login'
  }

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || [])
  //   console.log('wadudu')
  // }, [])

  // useEffect(() => {
  //   let total = 0
  //   if(cart.length > 0 && products.length > 0) {
  //     cart.forEach((item) => {
  //       total += item.qty * products.find((product) => product.id === item.id).price
  //     })
  //     setTotalPrice(total)
  //     localStorage.setItem("cart", JSON.stringify(cart))
  //   }
  // }, [cart, products])


  // useRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || [])

  // function addToCartRef (id) {
  //   cartRef.current = [...cartRef.current, {id, qty: 1}]
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current))
  // }

  useEffect(() => {
    getAllProducts((data) => {
      console.log('data', data)
      setProducts(data)
    })
  },[])

  // useEffect(() => {
  //   if(token) {
  //     setUsername(getUsername(token))
  //     console.log('tokenki', token)
  //   } else {
  //     window.location.href = '/login'
  //   }
  // }, [])

  return (
    <>
      <div className='flex justify-end h-20 bg-gray-200 items-center px-10 '>
        {username}
        <Button classname="ml-4 bg-gray-950" onClick={handleLogout}>Logout</Button>
      </div>
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