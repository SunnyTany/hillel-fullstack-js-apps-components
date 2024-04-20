import { FormEvent, useState } from'react';
import styles from './style.module.css';

interface FormDataInterface {
  login: string
  password: string
} 

const initialFormData: FormDataInterface = {
  login: '',
  password: '',
}

const ControledLoginForm= () => {
  const [formData, setFormData] = useState(initialFormData);

  const handlerFormSubmit = (e: FormEvent<HTMLFormElement> ): void => {
    e.preventDefault();

    console.log("login :", formData.login);
    console.log("password: ", formData.password);
  }

  const handleInputChange = (fieldName: string, fieldValue: string): void => {
    setFormData({...formData, [fieldName]: fieldValue});
  }

  return (
    <form onSubmit={handlerFormSubmit}>
      <div className={styles.form__group}>
        <label 
          className={styles.form__label} 
          htmlFor="login"
        >
          Login
        </label>
        <input 
          type="text" 
          id="login"
          className={styles.form__input}
          name="login"
          placeholder='Login'
          value={formData.login}
          onChange={(e) => handleInputChange('login', e.target.value)}
        />
      </div>
      <div className={styles.form__group}>
        <label 
          className={styles.form__label} 
          htmlFor="password"
        >
          Password
        </label>
        <input 
          type="password" 
          id="password"
          className={styles.form__input}
          name="password"
          placeholder='Password'
          value={formData.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
        />
      </div>
      <button 
        type="submit"
        className={styles.form__btn}
      >Login</button>
    </form>
  )
}

export default ControledLoginForm