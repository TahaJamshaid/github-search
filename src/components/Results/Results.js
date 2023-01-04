import React from 'react'

import { useGetRepositoryQuery } from '../../services/githubApi';

const Results = () => {

  const { data, error, isLoading } = useGetRepositoryQuery('react');
  console.log(isLoading)
  console.log(data);
  return (
    <div>Results</div>
  )
}

export default Results