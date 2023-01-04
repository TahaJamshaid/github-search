import React from 'react'
import { Card, Avatar, Image } from 'antd';
import styles from './results.module.css'

import { useGetRepositoryQuery } from '../../services/githubApi';


const Results = ({ query, queryType }) => {
  const { data, error, isLoading } = useGetRepositoryQuery({ query, queryType });

  if (isLoading) {
    return <h2>Data is loading....</h2>
  }

  if (error) {
    return <h2>Error while fetching data...</h2>
  }

  let results;
  if (queryType === 'repositories') {
    results = data.items.map((item) => (
      <Card size="small" title={item.name} extra={<a href={item.html_url}>More</a>} style={{ width: 300, height: 200 }}>
        {item.description && <p>{item.description.split(225) + "..."}</p>}
      </Card>
    ))
  } else if (queryType === 'users') {
    results = data.items.map((item) => (
      <Card size="small" title={item.login} extra={<a href={item.html_url}>More</a>} style={{ width: 300, height: 200 }}>
        <Avatar src={<Image src={item.avatar_url} style={{ width: 64 }} />} size={64} />
        <p>Score: {item.score}</p>
      </Card>))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {results}
      </div>
    </div>

  )
}

export default Results