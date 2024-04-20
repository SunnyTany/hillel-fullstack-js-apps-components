import Container from './components/common/Container';
import Title from './components/common/Title';
import SearchGroup from './components/search/SearchGroup';
import LabelStateless from './components/search/LabelStateless';
import InputStatefull from './components/search/InputStatefull';
import './App.css';


function App() {

  return (
    <Container>
      <Title titleText="Застосунок для пошуку фільмів"/>
      <SearchGroup>
        <LabelStateless text="Пошук"/>
        <InputStatefull type="search"/>
      </SearchGroup>
    </Container>
  )
}

export default App;