import {Link} from 'react-router-dom'

const Auth = () => {
  return (
    <div className='containerFlex w200'>
        <Link to="/auth/login">Login</Link> / 
        <Link to="/auth/registration">Registration</Link>
    </div>
  )
}

export default Auth