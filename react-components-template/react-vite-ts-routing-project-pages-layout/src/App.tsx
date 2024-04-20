import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layouts from './components/Layouts/Layouts'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Contacts from './components/pages/Contacts/Contacts'
import Login from './components/auth/Login/Login'
import Registration from './components/auth/Registration/Registration'
import NotFound from './components/pages/NotFound/NotFound'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layouts />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      
        <Route path="/auth" >
          <Route path="login" element={<Login/>} />
          <Route path="registration" element={<Registration/>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App