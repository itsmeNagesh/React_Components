import React from 'react'
import {Link }from 'react-router-dom'
export default function Header() {
  return (
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="#">WebSiteName</Link>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><Link to="#">Home</Link></li>
      <Link to="#">Page 1</Link>
            <Link to="#">Page 2</Link>
      <Link to="#">Page 3</Link>
    </ul>
  </div>
</nav>
  )
}
