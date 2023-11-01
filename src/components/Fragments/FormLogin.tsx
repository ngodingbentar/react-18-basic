import React from 'react'
import Input from '../Elements/Input'
import Button from '../Elements/Button/Index'

function FormLogin() {
  function handleLogin (event) {
    event.preventDefault()
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href = '/products'
  }
  return (
    <>
      <form onSubmit={handleLogin}>
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
        <Button classname="bg-blue-500 w-full" type="submit">Login</Button>
      </form>
    </>
  )
}

export default FormLogin