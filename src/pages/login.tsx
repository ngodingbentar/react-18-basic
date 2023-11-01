import React from 'react'
import { Link } from 'react-router-dom'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormLogin from '../components/Fragments/FormLogin'

function LoginPage() {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <div className='text-sm mt-6 text-center '>
        Don't have an account ? <Link to='/register' className='font-bold text-blue-500 '>Sign up</Link>
      </div>
    </AuthLayouts>
  )
}

export default LoginPage