import { useForm } from 'react-hook-form'
import { FC } from 'react'
import styles from './style.module.css'

type FormData = {
  username: string
  email: string
  password: string
}

const LoginForm: FC = () => {

  //!доделать форму: сделать сброс полей после отправки

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log( "User data: ", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="login">
          Login: 
        </label>
        <input 
          className={styles.input}  
          id="username" 
          type="text"
          {...register("username", { 
            required: "Login is required" ,
            minLength: {value: 3, message: "Login must be at least 3 characters"},
            maxLength: {value: 15, message: "Login must be at most 15 characters"}
          })}
        />
        {errors.username && <div>{errors.username.message}</div>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">
          Email: 
        </label>
        <input 
          className={styles.input}  
          id="email" 
          type="email"
          {...register("email", { 
            required: "Email is required" ,
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <div>{errors.email.message}</div>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input 
          className= {styles.input}
          id="password" 
          type="password"
          {...register("password", { 
            required: "Password is required",
            minLength: {value: 6, message: "Login must be at least 6 characters"},
            maxLength: {value: 20, message: "Login must be at most 20 characters"} 
          })}
        />
        {errors.password && <div>{errors.password.message}</div>}
      </div>
      <button className={styles.btn} type="submit">Submit</button>
    </form>
  )
}

export default LoginForm