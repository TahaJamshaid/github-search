import React, { useCallback } from 'react'
import styles from './search.module.css'
import { Typography } from 'antd';
import { Avatar, Image } from 'antd';
import Logo from '../../assets/github-logo.png'
import debounce from 'lodash.debounce';


const { Title } = Typography;

const Search = ({ query, setQuery, queryType, setQueryType }) => {
  const onInputChangeHandler = (event) => {
    event.preventDefault()
    setQuery(event.target.value)
  }

  const onSelectChangeHandler = (event) => {
    event.preventDefault()
    setQueryType(event.target.value);
  }
  const debouncedChangeHandler = useCallback(
    debounce(onInputChangeHandler, 1000)
    , []);
  return (
    <div>
      <div className={styles.container}>
        <Avatar src={<Image src={Logo} style={{ width: 64 }} />} size={64} />
        <div className={styles.title_container}>
          <Title className={styles.title} level={2}>GitHub Searcher</Title>
          <Title className={styles.title} level={5}>Search Users or repositories below</Title>
        </div>
      </div>
      <div>
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <input className={styles.search_input} placeholder="Start typing to search .." type="text" onChange={debouncedChangeHandler} />
          <select className={styles.select_input} name="cars" id="cars" onChange={onSelectChangeHandler}>
            <option value="repositories">repos</option>
            <option value="users">users</option>
          </select>
        </form>
      </div>

    </div>

  )
}

export default Search