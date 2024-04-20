import { useState } from 'react';
import { getData, debounceTime } from '../../searchMovies/main';

const InputStatefull = ({type}) => {

  const [value, setValue] = useState('Some text...');
  const [searchLast, setSearchLast] = useState(null);
  const [flag, setFlag] = useState(true);

  const inputSearchHandeler = ({target}) => {

    setValue(target.value);
    
    debounceTime(() => {
      let searchString = target.value.trim();
      if (searchString.length < 3 || searchString === searchLast) return;
      
      getData(`https://www.omdbapi.com/?apikey=18b8609f&s=${searchString}`)
        .then(data => data.forEach(movie => console.log(movie)))
        .catch(err => console.log(err));
    
      setSearchLast( searchString);
      setFlag(false);
    }, 2000);
  }

  return (
    <>
      <input 
        className="search__input" 
        type={type} 
        placeholder={value} 
        onChange={inputSearchHandeler}
        data-flag={flag}
      />
      <h2 className="search__start-message">
        { flag ? 
          'Щоб знайти фільми введіть у пошук англійською назву чи частину назви фільму' 
          : '' 
        }
      </h2>
    </>
  )
}

export default InputStatefull;