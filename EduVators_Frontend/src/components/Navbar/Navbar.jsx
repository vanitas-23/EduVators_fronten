import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="Navbar">
      <h1>EduVators</h1>
      <div className="loginSignup">
         <a href="/login"><div>Login</div></a>
         <a href="/signup"><div>Signup</div></a>
      </div>
    </div>
  )
}

export default Navbar
