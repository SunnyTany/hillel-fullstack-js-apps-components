import { createContext } from 'react';
import movies from '../search/Input/Input';

export const MoviesContext = createContext(movies);
console.log(MoviesContext);