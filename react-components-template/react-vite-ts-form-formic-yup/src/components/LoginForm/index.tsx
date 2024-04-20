import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import fieldGroups from './fieldGroups'
import styles from './style.module.css'

interface ValuesInterface {
  userName: string,
  email: string,
  password: string
}

interface ActionsInterface {
  setSubmitting: (isSubmitting: boolean) => void,
  resetForm: () => void
}

const LoginForm = () => {
  const validationSchema = Yup.object({
    userName: Yup.string()
      .required('Login is required')
      .min(3, 'Login must be at least 3 characters')
      .max(15, 'Login must be at most 15 characters'),
    email: Yup.string()
      .required('Login is required')
      .email( 'Email must be a valid email'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 5 characters')
      .max(20, 'Password must be at most 20 characters')
  })

  const handleSubmit = (values: ValuesInterface, actions: ActionsInterface) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
      actions.resetForm()
    }, 200)
  }

  return (
    <Formik 
      initialValues={{ userName: '', email: '', password: '' }} 
      validationSchema={validationSchema} 
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        { fieldGroups.map((group, index) => (
          <div key={index} className={styles.formGroup}>
            <label 
              className={styles.label} 
              htmlFor={group.label.htmlFor}
            >{group.label.text}</label>
            <Field 
              className={styles.input} 
              type={group.field.type} 
              placeholder={group.field.placeholder} 
              id={group.field.id} 
              name={group.field.name} 
            />
            <ErrorMessage
              className={styles.errorMessage} 
              name={group.field.name} 
              component={group.errorMessage.component}
            />
          </div>
        ))}
        <div className={styles.formGroup}>
          <button className={styles.btn} type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  )
}

export default LoginForm