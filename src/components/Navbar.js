import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
<nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Food Delivery App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <ul className="navbar-nav mb-2 mb-lg-0 d-flex">
      <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/restaurants">All Restaurants </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/menu">All Products </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/signup">Register </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/signin">Login </Link>
        </li>

        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fas fa-user-circle"></i>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/signup"><i class="fas fa-user"></i> Sign Up</Link></li>
            <li><Link className="dropdown-item" to="/signin"><i class="fas fa-pizza-slice"></i> Sign In</Link></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/admin/dashboard">View Cart</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
