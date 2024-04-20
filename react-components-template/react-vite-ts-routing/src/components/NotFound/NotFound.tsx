import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container'>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Back to home page</Link>
    </div>
  )
}

export default NotFound