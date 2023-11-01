import React from 'react'
import FormLogin from '../Fragments/FormLogin'

function AuthLayouts() {
  return (
    <>
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 to-blue-600">Login</h1>
        <p className="font-medium text-slate-500 mb-8 ">
          Enter your details
        </p>
        <FormLogin />
      </div>
    </>
  )
}

export default AuthLayouts