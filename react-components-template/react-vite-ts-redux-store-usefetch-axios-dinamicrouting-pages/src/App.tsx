import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home/index"
import Posts from "./pages/Posts/index"
import Users from "./pages/Users/index"
import Todos from "./pages/Todos/index"
import NotFound from "./pages/NotFound/index"
import { RouteInterface } from "./types/Route.interface"
import './App.css'

const routes: RouteInterface[] = [
  { path: "/", component: <Home /> },
  { path: "/posts", component: <Posts /> },
  { path: "/users", component: <Users /> },
  { path: "/todos", component: <Todos /> },
  { path: "*", component: <NotFound /> }
] 

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          {routes.map((route: RouteInterface, index: number) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
