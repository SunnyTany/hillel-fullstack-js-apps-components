import { useState, ChangeEvent, FormEvent } from'react'
import { Button, Form } from 'react-bootstrap'

const RegistrationForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value)
        break
      case 'password':
        setPassword(e.target.value)
        break
      case 'confirmPassword':
        setConfirmPassword(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        break
      default:
        break
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password!== confirmPassword) {
      console.log('Passwords do not match')
      return
    } 
    console.log(username, password, email, 'Registration successful')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUserName" className='mb-3'>
        <Form.Label>Username</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter username" 
          value={username} 
          onChange={handleInputChange} 
          name="username"
        />
      </Form.Group>
      <Form.Group controlId="formPassword" className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={handleInputChange} 
          name="password"
        />
      </Form.Group>
      <Form.Group controlId="formConfirmPassword" className='mb-3'>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control 
          type='password' 
          placeholder='Confirm Password' 
          value={confirmPassword} 
          onChange={handleInputChange} 
          name='confirmPassword'
        />
      </Form.Group>
      <Form.Group controlId="formEmail" className='mb-3'>
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type='email' 
          placeholder='Enter email' 
          value={email} 
          onChange={handleInputChange} 
          name='email'
        />
      </Form.Group>
      <Button variant="primary" type="submit">Send</Button>
    </Form>
  )
}

export default RegistrationForm