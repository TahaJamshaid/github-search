import { useState } from 'react'
import './App.css';
import Search from './components/Search/Search'
import Results from './components/Results/Results'

function App() {

  const [query, setQuery] = useState('');
  const [isUser, setIsUser] = useState();

  return (
    <div className="App">
      <Search setQuery={setQuery} query={query} isUser={isUser} setIsUser={setIsUser} />
      App
      {/* {
        query.length !== 0 &&
        <Results query={query} isUser={isUser} />
      } */}
    </div>
  );
}

export default App;
