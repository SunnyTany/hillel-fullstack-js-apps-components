import { NavLink } from "react-router-dom"
import { LinkInterface } from "../../types/Link.interface"

const links: LinkInterface[] = [
  { path: "/", name: "Home" },
  { path: "/posts", name: "Posts" },
  { path: "/users", name: "Users" },
  { path: "/todos", name: "Todos" }
]

const NavBar = () => {
    return (
      <nav>
        <ul>
          {links.map((link: LinkInterface, index: number) => (
            <li key={index}>
              <NavLink className="navlink" to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    )
}

export default NavBar