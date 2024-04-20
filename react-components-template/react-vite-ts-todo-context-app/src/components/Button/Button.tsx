import {ButtonPropsInterface} from '../../types/ButtonProps.interface'
import styles from './Button.module.css'

const Button = ({ children, ...props }: Partial<ButtonPropsInterface>) => {
  return (
    <button className={styles.btn} {...props} >
      {children}
    </button>
  )
}

export default Button