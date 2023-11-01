import React from 'react'
import Input from '../Elements/Input'
import Button from '../Elements/Button/Index'

function FormLogin() {
  return (
    <>
      <form action="">
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
        <Button classname="bg-blue-500 w-full">Login</Button>
      </form>
    </>
  )
}

export default FormLogin