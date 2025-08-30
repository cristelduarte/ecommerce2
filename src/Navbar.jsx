import CartWidget from './CartWidget'
import { NavLink, Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">MiTienda</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink end className="nav-link" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/men's clothing">Men's clothing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/jewelery">Jewelery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/electronics">Electronics</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/women-clothing">Women-clothing</NavLink>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
