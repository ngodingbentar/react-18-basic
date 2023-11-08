import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DarkMode } from '../../context/DarkMode'
import { useTotalPrice, useTotalPriceDispatch } from '../../context/TotalPriceContext'

function TableCart(props) {
  const { products } = props
  const cart = useSelector((state) => state?.cart?.data)
  // const [totalPrice, setTotalPrice] = useState(0)
  const { total : totalPrice } = useTotalPrice()
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
  const dispatch = useTotalPriceDispatch()


  useEffect(() => {
    let total = 0
    if(cart.length > 0 && products.length > 0) {
      cart.forEach((item) => {
        total += item.qty * products.find((product) => product.id === item.id).price
      })
      // setTotalPrice(total)
      dispatch({
        type: "UPDATE",
        payload: {
          total: total
        }
      })
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart, products])

  return (
    <table className={`text-left table-auto border-separate border-spacing-x-5 ${isDarkMode && 'text-white'}`}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Totsl</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 && cart.map((item, i) => {
          const product = products.find((product) => product.id === item.id)
          return (
            <tr key={i} className='border-b-2'>
              <td>{product?.title.substring(0, 30)}</td>
              <td>{product?.price.toLocaleString('id-ID', { style: 'currency', currency: 'USD' })}</td>
              <td>{item.qty}</td>
              <td>{(product?.price * item.qty).toLocaleString('id-ID', { style: 'currency', currency: 'USD' })} </td>
            </tr>
          )
        })}
        <tr>
          <td colSpan={3}>
            <b>Total price</b>
          </td>
          <td>
            <b>
              {totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'USD' })}
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default TableCart