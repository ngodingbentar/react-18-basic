import React from 'react'
import { Link } from 'react-router-dom'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormRegister from '../components/Fragments/FormRegister'

function RegisterPage() {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <div className='text-sm mt-6 text-center '>
        Have an account ? <Link to='/login' className='font-bold text-blue-500 '>Sign in</Link>
      </div>
    </AuthLayouts>
  )
}

export default RegisterPage