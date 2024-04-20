import Container from './components/common/Container/Container'
import Title from './components/common/Title/Title'
import SearchGroup from './components/search/SearchGroup'
import Label from './components/search/Label'
import Input from './components/search/Input/Input'
import { MoviesContext } from './components/context/MoviesContext'
import './App.scss'


function App() {

  return (
    <Container movies={MoviesContext}>
      <Title titleText="Застосунок для пошуку фільмів"/>
      <SearchGroup>
        <Label text="Пошук"/>
        <Input/>
      </SearchGroup>
    </Container>
  )
}

export default App