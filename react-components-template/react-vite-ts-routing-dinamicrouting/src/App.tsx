import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Contacts from './components/pages/Contacts/Contacts'
import Login from './components/auth/Login/Login'
import Registration from './components/auth/Registration/Registration'
import Admin from './components/Admin/Admin'
import NotFound from './components/pages/NotFound/NotFound'
import { RouteInterface } from './types/Route.interface'

import './App.css'

export const routes: RouteInterface[] = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/contacts', component: Contacts, name: 'Contacts' },
  { path: '/auth/login', component: Login, name: 'Login' },
  { path: '/auth/registration', component: Registration, name: 'Registration' },
  { path: '/admin', component: Admin, name: 'Admin' },
  { path: '*', component: NotFound, name: 'NotFound' }
]

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route: RouteInterface, index: number) => {
          return (
            <Route key={index} path={route.path} element={<route.component />}/>
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App