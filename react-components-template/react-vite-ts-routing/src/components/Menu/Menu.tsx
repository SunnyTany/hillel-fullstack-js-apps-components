import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className='container'>
      <ul>
        <li><NavLink className="navLink" to="/">Home</NavLink></li>
        <li><NavLink className="navLink" to="/about">About</NavLink></li>
        <li><NavLink className="navLink" to="/contacts">Contacts</NavLink></li>
      </ul>
    </nav>
  )
}

export default Menu