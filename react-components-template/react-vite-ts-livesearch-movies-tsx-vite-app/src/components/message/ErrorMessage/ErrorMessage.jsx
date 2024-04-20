import styles from './ErrorMessage.module.scss';

const ErrorMessage = () => {
  return (
    <h2 className={styles.searchErrorSearch}>
      ! &#129300; Нажаль, за цим запитом нічого не знайдено
    </h2>
  )
}

export default ErrorMessage;