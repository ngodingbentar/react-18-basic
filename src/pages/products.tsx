import React, { useEffect, useState } from 'react'
import Button from '../components/Elements/Button/Index'
import CardProduct from '../components/Fragments/CardProduct'
import DataJson from '../assets/products.json'

const products = DataJson.products
const email = localStorage.getItem('email')
interface IProduct {
  id: number,
  qty: number,
}
function ProductsPage() {

  const [cart, setCart] = useState([] as IProduct[])
  const [totalPrice, setTotalPrice] = useState(0)

  function addToCart (id) {
    if(cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item2) => item2.id === id ? {...item2, qty: item2.qty + 1} : item2)
      )
    } else {
      setCart([...cart, {
        id,
        qty: 1
      }])
    }
  }
  function handleLogout () {
    console.log('logout')
    localStorage.clear()
    window.location.href = '/login'
  }

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || [])
    console.log('wadudu')
  }, [])

  useEffect(() => {
    let total = 0
    if(cart.length > 0 && products.length > 0) {
      cart.forEach((item) => {
        total += item.qty * products.find((product) => product.id === item.id).price
      })
      setTotalPrice(total)
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart])

  return (
    <>
      <div className='flex justify-end h-20 bg-gray-200 items-center px-10 '>
        {email}
        <Button classname="ml-4 bg-gray-950" onClick={handleLogout}>Logout</Button>
      </div>
      <div className='flex py-5 '>
        <div className="w-2/3 flex justify-center flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} id={product.id} addToCart={addToCart} />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/3">
          <table className='text-left table-auto border-separate border-spacing-x-5 '>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Totsl</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, i) => {
                const product = products.find((product) => product.id === item.id)
                return (
                  <tr key={i}>
                    <td>{product?.title}</td>
                    <td>{product?.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                    <td>{item.qty}</td>
                    <td>{(product!.price * item.qty).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })} </td>
                  </tr>
                )
              })}
              <tr>
                <td colSpan={3}>
                  <b>Total price</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ProductsPage