import React from 'react'
import Input from '../Elements/Input'
import Button from '../Elements/Button/Index'

function FormRegister() {
  return (
    <>
      <form action="">
        <Input
          label="Full Name"
          type="text"
          name="fullname"
          placeholder="Dewa Qintoro"
          htmlfor="fullname"
        />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="email@gmail.com"
          htmlfor="Email"
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="**********"
          htmlfor="password"
        />
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="**********"
          htmlfor="confirmPassword"
        />
        <Button classname="bg-blue-500 w-full">Register</Button>
      </form>
    </>
  )
}

export default FormRegister