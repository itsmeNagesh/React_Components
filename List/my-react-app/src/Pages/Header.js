import React from 'react'
import {Outlet,Link} from 'react-router-dom'
export default function Header() {
  return (
    <div className='container-fluid'>
     <ul className="nav">
  <li className="nav-item ">
    <Link className="nav-link active "  to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active"  to="/Routing">Routing</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/Form">Form</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/List">List</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/Addon">Addon</Link>
  </li>
</ul>
<Outlet />
    </div>
  )
}
