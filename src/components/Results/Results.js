import React, { useState, useEffect } from 'react'
import styles from './results.module.css'
import ResultCard from '.././ResultCard/ResultCard';

import { useGetRepositoryQuery } from '../../services/githubApi';


const Results = ({ query, queryType }) => {

  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetRepositoryQuery({ query, queryType, page });
  const [currentData, setCurrentData] = useState({ data: [], query: query, type: queryType })

  console.log(currentData)
  useEffect(() => {
    if (data) {
      setCurrentData({ ...currentData, data: [...currentData.data, ...data.items], })
    }
    if (currentData.query !== query) {
      setCurrentData({ query: query, data: data.items, type: queryType })
    }
    if (currentData.type !== queryType) {
      setCurrentData({ query: query, data: data.items, type: queryType })
    }
  }, [data])

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      if (scrolledToBottom && !isLoading && page * 30 < data.total_count) {
        console.log("Fetching more data...");
        setPage(page + 1);
      }
    };
    document.addEventListener("scroll", onScroll);
    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isLoading]);


  if (isLoading) {
    return <h2>Data is loading....</h2>
  }

  if (error) {
    return <h2>Error while fetching data...</h2>
  }
  console.log(data)
  let results;
  if (queryType === 'repositories') {
    results = currentData.data.map((item, key) => (
      <ResultCard key={key} name={item.name} link={item.html_url} description={item.description} cardType='repositories' />
    ))
  } else if (queryType === 'users') {
    results = currentData.data.map((item, key) => (
      <ResultCard key={key} name={item.name || item.login} link={item.html_url} imageURL={item.avatar_url} score={item.score} cardType='user' />)
    )
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {results}
          {page * 30 < data.total_count ? <p>Loading More....</p> : <p> No results</p>}
        </div>
      </div>
    </>


  )
}

export default Results