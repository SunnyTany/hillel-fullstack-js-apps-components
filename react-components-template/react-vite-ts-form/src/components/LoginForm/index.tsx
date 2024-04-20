import { ChangeEvent, FormEvent, FC, useState, useEffect } from 'react'

import styles from './style.module.css'

const LoginForm: FC = () => {
  const [login, setLogin] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loginError, setLoginError] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const [isFormValid, setIsFormValid] = useState<boolean>(false)
  const [isLoginTouched, setIsLoginTouched] = useState<boolean>(false)
  const [isEmailTouched, setIsEmailTouched] = useState<boolean>(false)
  const [isPasswordTouched, setIsPasswordTouched] = useState<boolean>(false)

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
    setIsLoginTouched(true)
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setIsEmailTouched(true)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    setIsPasswordTouched(true)
  }

  const validateLogin = (login: string) => {
    if (login.trim() === '') {
      setLoginError('Login is required')
      return false
    } else if ( login.length < 3 || login.length > 15) {
      setLoginError('Login must be between 3 and 15 characters')
      return false
    }
    setLoginError('')
    return true
  }

  const validateEmail = (email: string) => {
    if (email.trim() === '') {
      setEmailError('Email is required')
      return false
    } else if (!email.includes('@')) {
      setEmailError('Email must contain @')
      return false
    }
    setEmailError('')
    return true
  }

  const validatePassword = (password: string) => {
    if (password.trim() === '') {
      setPasswordError('Password is required')
      return false
    } else if (password.length < 6 || password.length > 20) {
      setPasswordError('Password must be between 6 and 20 characters')
      return false
    }
    setPasswordError('')
    return true
  } 

  useEffect(() => {

    if(isLoginTouched ) {
      validateLogin(login)
    }

    if(isEmailTouched) {
      validateEmail(email)
    }

    if(isPasswordTouched) {
      validatePassword(password)
    }

  }, [isLoginTouched, isEmailTouched, isPasswordTouched, login, email, password])
  
  useEffect(() => {
    setIsFormValid(!loginError && !emailError && !passwordError)
  }, [loginError, emailError, passwordError])

  const handleSubmit = ( e: FormEvent ) => {
    e.preventDefault()
    if (isFormValid) {
      console.log('Login form data: ', { login, email, password })
      setIsLoginTouched(false)
      setIsEmailTouched(false)
      setIsPasswordTouched(false)
      setLogin('')
      setEmail('')
      setPassword('')
      setIsFormValid(false)
      setLoginError('')
      setEmailError('')
      setPasswordError('')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="username">
          Login
        </label>
        <input 
          className={styles.input} 
          type="text" 
          id="username" 
          name="username"
          value={login}
          onChange={handleLoginChange}
        />
        {loginError && <div className={styles.errorMessage}>{loginError}</div>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input 
          className={styles.input} 
          type="email" 
          id="email" 
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <div className={styles.errorMessage}>{emailError}</div>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input 
          className={styles.input} 
          type="password" 
          id="password" 
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <div className={styles.errorMessage}>{passwordError}</div>}
      </div>
      <button className={styles.btn} type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  )
}

export default LoginForm