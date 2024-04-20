import CardMovie from "./CardMovie";
import { useContext } from 'react'
import MoviesContext from '../../context/MoviesContext'
import styles from './MoviesList.module.scss'

const MoviesList = () => {
  const movies = useContext(MoviesContext)
  console.log(movies)

  return (
    <section className={styles.moviesList}>
      {
        movies ? 
        (movies.forEach( movie => {
          return <CardMovie key={movie.id} movie={movie} />
        })) : 
        <h2>No movies</h2>
      }
    </section>
  )
}

export default MoviesList