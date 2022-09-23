import React from 'react'
import MyButton from '../button/MyButton'
import MyInput from '../input/MyInput'

function Login() {
  return (
    <div>
        <h1 style={{fontSize: 35, color: 'red', textAlign: 'center'}}>Login Page</h1>
        <MyInput type="text" placeholder="login"/>
        <MyInput type="password" placeholder="password"/>
        <MyButton>Login</MyButton>
    </div>
  )
}

export default Login