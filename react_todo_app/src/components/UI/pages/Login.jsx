import React, { useContext } from 'react'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'
import MyInput from '../input/MyInput'

function Login() {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }
  return (
    <div>
        <h1 style={{fontSize: 35, color: 'red', textAlign: 'center'}}>Login Page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="login"/>
                <MyInput type="password" placeholder="password"/>
                <MyButton>Login</MyButton>
            </form>
    </div>
  )
}

export default Login