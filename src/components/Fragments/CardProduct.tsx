import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Elements/Button/Index'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'

function CardProduct(props) {
  const { children } = props
  return (
    <div className='w-full max-w-[300px] bg-white border border-gray-200 rounded-lg shadow m-2 flex flex-col justify-between'>
      {children}
    </div>
  )
}

function Header ({image}) {
  return (
    <Link to={"/products/1"}>
      <img src={image} alt='img' className='flex m-auto p-4 h-60 w-full object-cover' />
    </Link>
  )
}

function Body (props) {
  const { title, children } = props
  return (
    <div className="px-5 pb-5 h-full">
      <Link to={"/products/1"}>
        <div className='text-s font-semibold tracking-tight'>
          {title.substring(0, 30)}
        </div>
        <div className="text-sm">
          { children.substring(0, 100) }
        </div>
      </Link>
    </div>
  )
}

function Footer (props) {
  const {id, price} = props
  const dispatch = useDispatch()
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <span className='text-xl font-bold '>{price.toLocaleString('id-ID', { style: 'currency', currency: 'USD' })}</span>
        <Button classname='bg-blue-600 text-white' onClick={() => dispatch(addToCart({id, qty: 1}))}>Add To Cart</Button>
      </div>
    </>
  )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct