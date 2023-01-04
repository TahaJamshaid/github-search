import React, { useEffect, useCallback } from 'react'
import { Typography } from 'antd';
import { Avatar, Image } from 'antd';
import Logo from '../../assets/github-logo.png'
import debounce from 'lodash.debounce';


const { Title } = Typography;


const Search = ({ query, setQuery, IsUser, setIsUser }) => {
  const onInputChangeHandler = (event) => {
    console.log(query);
    setQuery(event.target.value)

  }

  const debouncedChangeHandler = useCallback(
    debounce(onInputChangeHandler, 1000)
    , []);

  console.log(query)


  return (
    <>
      <div>
        <Avatar src={<Image src={Logo} style={{ width: 64 }} />} size={64} />
        <div>
          <Title level={2}>GitHub Searcher</Title>
          <Title level={5}>Search Users or repositories below</Title>
        </div>
      </div>
      <div>
        <form>
          <input type="text" onChange={debouncedChangeHandler} />
          <select name="cars" id="cars">
            <option value="user">User</option>
            <option value="repo">repository</option>
          </select>
        </form>
      </div>

    </>

  )
}

export default Search