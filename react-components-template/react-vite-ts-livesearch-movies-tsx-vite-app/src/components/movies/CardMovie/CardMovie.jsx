import styles from './CardMovie.module.scss'

const CardMovie = ({ movie }) => {
  return (
    <div className={styles.movie}>
      <img className={styles.image} src={movie.poster ? movie.poster : '../../assets/images/no-image.jpg'} alt={movie.title} />
      <div className={styles.info}>
        <p className={styles.year}>{movie.year}</p>
        <h2 className={styles.title}>{movie.title}</h2>
      </div>
    </div>
  )
}

export default CardMovie