import { MoviesContext } from '../../context/MoviesContext';
import styles from './Container.module.scss';

const Container = ({movies, children}) => {
  return (
    <div className={styles.container}>
      <MoviesContext.Provider value={movies}>
        {children}
      </MoviesContext.Provider>
    </div>
  )
}

export default Container;