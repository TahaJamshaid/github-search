import React from 'react'
import { Card } from 'antd';
import styles from './results.module.css'

import { useGetRepositoryQuery } from '../../services/githubApi';
import { useGetUsersQuery } from '../../services/githubApi';

const Results = ({ query }) => {

  const { data, error, isLoading } = useGetRepositoryQuery(query);

  if (isLoading) {
    return <h2>Data is loading....</h2>
  }

  if (error) {
    return <h2>Error while fetching data...</h2>
  }

  console.log(isLoading)
  console.log(data)
  console.log(data);

  let results = data.items.map((item) => (
    <Card size="small" title={item.name} extra={<a href={item.html_url}>More</a>} style={{ width: 300 }}>
      <p>{item.description}</p>
      {/* <p>Card content</p> */}
      {/* <p>Card content</p> */}
    </Card>
  ))
  return (
    <div className={styles.container}>
      {results}
      {/* <Card size="small" title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card> */}
    </div>
  )
}

export default Results