import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
        <Link to="/">about</Link><br/>
      <Link to="/services">Services</Link>

    </div>
  )
}

export default Header