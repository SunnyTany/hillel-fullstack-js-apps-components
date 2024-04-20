import { NavLink } from 'react-router-dom'
import { RouteInterface } from '../../../types/Route.interface'
import {routes} from '../../../App'

const Menu = () => {
  return (
    <nav className='containerFlex'>
      <ul>
        {routes.filter((route: RouteInterface) => route.name !== 'NotFound').map((route: RouteInterface, index: number) => {
          return (
            <li key={index}>
              <NavLink className="navLink" to={route.path}>{route.name}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Menu