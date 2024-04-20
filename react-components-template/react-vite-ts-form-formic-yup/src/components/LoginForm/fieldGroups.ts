import styles from './style.module.css'

const fieldGroups = [
  {
    label: {
      text: 'Login',
      className: styles.label,
      htmlFor: "userName"
    },
    field: {
      className: styles.input,
      type: "text",
      placeholder: "Enter login",
      id: "userName", 
      name: "userName"
    },
    errorMessage: {
      className: styles.errorMessage,
      component: "div"
    }
  },
  {
    label: {
      text: 'Email',
      className: styles.label,
      htmlFor: "email"
    },
    field: {
      className: styles.input,
      type: "email",
      placeholder: "Enter email",
      id: "email",
      name: "email"
    },
    errorMessage: {
      className: styles.errorMessage,
      component: "div"
    }
  },
  {
    label: {
      text: 'Password',
      className: styles.label,
      htmlFor: "password"
    },
    field: {
      className: styles.input,
      type: "password",
      placeholder: "Enter password",
      id: "password",
      name: "password"
    },
    errorMessage: {
      className: styles.errorMessage,
      component: "div"
    }
  }
]

export default fieldGroups