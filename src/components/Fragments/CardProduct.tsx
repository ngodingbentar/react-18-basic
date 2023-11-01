import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Elements/Button/Index'

function CardProduct(props) {
  const { children } = props
  return (
    <div className='w-full max-w-[300px] bg-white border border-gray-200 rounded-lg shadow mx-2 flex flex-col justify-between'>
      {children}
    </div>
  )
}

function Header () {
  return (
    <Link to={"/products/1"}>
      <img src='https://picsum.photos/200' alt='img' className='flex m-auto p-4' />
    </Link>
  )
}

function Body (props) {
  const { title, children } = props
  return (
    <div className="px-5 pb-5 h-full">
      <Link to={"/products/1"}>
        <div className='text-s font-semibold tracking-tight'>
          {title}
        </div>
        <div className="text-sm">
          {children}
        </div>
      </Link>
    </div>
  )
}

function Footer ({price}) {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <span className='text-xl font-bold '>Rp. {price}</span>
        <Button classname='bg-blue-600 text-white'>Add To Cart</Button>
      </div>
    </>
  )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct