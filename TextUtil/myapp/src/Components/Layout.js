
import {Link} from 'react-router-dom'



export default function Layout() {

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" id='n'>
 

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">Search</span>
    </button>
    
    < div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-a p-auto" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-a" to="/About">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-a" to="/Service">Services</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-a" to="/Nopage">Nopages</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-a dropdown-toggle" to="#" id="navbarDropdownMenua" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown a
          </Link>
        
        </li>
      </ul>
   
      <div>
    <form className="d-flex" role="search" id='s'>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary" type="submit">Search</button>
    </form>
</div>
    </div>
  </nav>

 
    </>
  )
}
