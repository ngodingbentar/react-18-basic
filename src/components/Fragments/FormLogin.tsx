import React, { useState } from 'react'
import Input from '../Elements/Input'
import Button from '../Elements/Button/Index'
import { login } from '../../services/auth.service'

function FormLogin() {
  const [loginError, setLoginError] = useState("")

  function handleLogin (event) {
    event.preventDefault()
    console.log('event', event.target.email.value)
    // localStorage.setItem('email', event.target.email.value);
    // localStorage.setItem('password', event.target.password.value);
    const data = {
      username: event.target.email.value,
      password: event.target.password.value
    }
    login(data, (status, res) => {
      if(status) {
        localStorage.setItem("token", res)
        window.location.href = '/products'
      } else {
        console.log(res.response.data)
        setLoginError(res.response.data)
        setTimeout(() => {
          setLoginError("")
        }, 3000)
      }
    })
  }
  return (
    <>
      {loginError && <p className='text-red-500 mb-5'>{loginError}</p>}
      <form onSubmit={handleLogin}>
        <Input
          label="Email"
          type="text"
          name="email"
          placeholder="email@gmail.com"
          htmlfor="Email"
        />
        {/* <Input
          label="Username"
          type="text"
          name="text"
          placeholder="username"
          htmlfor="Username"
        /> */}
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