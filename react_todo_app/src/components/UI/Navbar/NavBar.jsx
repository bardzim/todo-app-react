import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'

function NavBar() {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
      <MyButton
        onClick={logout}
      >
        Logout
      </MyButton>
        <div className="navbar__links">
            <Link to="about">about site</Link>
            <Link to="posts">Posts</Link>
        </div>
    </div>
  )
}

export default NavBar