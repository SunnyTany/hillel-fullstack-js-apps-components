import {useState} from 'react';
import debounceTime from '../../../utils/debounceTime'
import getData from '../../../utils/getData' 
import StartMessage from '../../message/StartMessage/StartMessage';
import styles from './Input.module.scss'

const Input = () => {
  const [value, setValue] = useState('Some text...');
  const [searchLast, setSearchLast] = useState(null);
  const [flag, setFlag] = useState(true);
  const [movies, setMovies] = useState([]);

  const inputSearchHandler = ({target}) => {

    setValue(target.value);
    
    debounceTime(() => {
      const fetchMovies = async () => {
        try {
          let searchString = target.value.trim();

          if (searchString.length < 3 || searchString === searchLast) return;
  
          const API_URL = `https://www.omdbapi.com/?apikey=18b8609f&s=${searchString}`;
  
          const response = getData( API_URL );

          setMovies(response.data)
          console.log(movies)
          console.log(response.data)

          setSearchLast( searchString );
          setFlag(false)
          return response.data;
        } catch(err) {
          throw new Error(err)
        } 
      }
      fetchMovies()
    }, 2000);
  }

  return (
    <>
      <input 
        className={styles.input} 
        type="search" 
        placeholder={value} 
        onChange={inputSearchHandler}
        data-flag={flag}
      />
      { flag && <StartMessage/> }
    </>
  )
}

export default Input