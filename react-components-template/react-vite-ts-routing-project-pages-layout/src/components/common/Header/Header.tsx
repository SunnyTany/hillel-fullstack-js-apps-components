import Menu from '../Menu/Menu'
import Auth from '../../auth/Auth/Auth'

const Header = () => {
  return (
    <header className='containerFlex'>
      <Menu/>
      <Auth/>
    </header>
  )
}

export default Header