import { useState } from 'react'

import Search from './components/Search/Search'
import Results from './components/Results/Results'

function App() {
  const [query, setQuery] = useState('');
  const [queryType, setQueryType] = useState('repositories');

  return (
    <div className="App wrapper" >
      <div className='search-container'>
        <Search setQuery={setQuery} query={query} queryType={queryType} setQueryType={setQueryType} />
      </div>
      {query.length > 3 &&
        <Results query={query} queryType={queryType} />
      }
    </div>
  );
}

export default App;
