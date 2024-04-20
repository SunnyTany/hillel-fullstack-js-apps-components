import { useState } from 'react'

const ControledLoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted')
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
      console.log(username)
    } else if (name === 'password') {
      setPassword(value);
      console.log(password);
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="username">Login</label>
        <input 
          type="text" 
          name="username" 
          id="username" 
          placeholder={username} 
          value={username}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name="password" 
          id="password" 
          placeholder={password} 
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default ControledLoginForm