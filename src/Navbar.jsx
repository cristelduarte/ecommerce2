import CartWidget from './CartWidget'


export function Navbar() {

  return (
<nav>
      <div>
        <h2>MiTienda</h2>
      </div>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget/>
    </nav>
  )
}

export default Navbar
