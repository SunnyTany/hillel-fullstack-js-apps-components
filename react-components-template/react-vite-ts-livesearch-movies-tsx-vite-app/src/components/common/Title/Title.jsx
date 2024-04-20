import styles from './Title.module.scss';

const Title = ({titleText}) => {
  return (
    <h1 className={styles.title}>{titleText}</h1>
  )
}

export default Title;