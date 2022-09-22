import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="navbar">
        <div className="navbar__links">
            <Link to="about">about site</Link>
            <Link to="posts">Posts</Link>
        </div>
    </div>
  )
}

export default NavBar