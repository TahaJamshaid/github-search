import React from 'react'

import { useGetRepositoryQuery } from '../../services/githubApi';
import { useGetUsersQuery } from '../../services/githubApi';

const Results = ({ query }) => {

  const { data, error, isLoading } = useGetRepositoryQuery(query);

  console.log(isLoading)
  console.log(data)
  console.log(data);
  return (
    <div>Results</div>
  )
}

export default Results