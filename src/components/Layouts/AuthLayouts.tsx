import React from 'react'
import { Link } from 'react-router-dom'

function AuthLayouts(props) {
  const { children, title, type } = props
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 to-blue-600">{title}</h1>
          <p className="font-medium text-slate-500 mb-8 ">
            Enter your details
          </p>
          {children}
          <Navigation type={type} />
        </div>
      </div>
    </>
  )
}

function Navigation ({type}) {
  return (
    <div className='text-sm mt-6 text-center '>
      {type === 'login' ? (
        <p>
          Don't have an account ? <Link to='/register' className='font-bold text-blue-500 '>Sign up</Link>
        </p>
      ) : (
        <p>
          Have an account ? <Link to='/login' className='font-bold text-blue-500 '>Sign in</Link>
        </p>
      )}
    </div>
  )
}

export default AuthLayouts