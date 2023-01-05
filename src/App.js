import { useState } from 'react'
import './App.css';
import Search from './components/Search/Search'
import Results from './components/Results/Results'

function App() {
  const [query, setQuery] = useState('');
  const [queryType, setQueryType] = useState('repositories');

  return (
    <div className="App">
      <Search setQuery={setQuery} query={query} queryType={queryType} setQueryType={setQueryType} />
      {query.length !== 0 &&
        <Results query={query} queryType={queryType} />
      }
    </div>
  );
}

export default App;
