import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const githubApiHeaders = {

// }

const baseUrl = 'https://api.github.com';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getRepository: builder.query({
      query: (args) => {
        const { query, queryType } = args;
        return `search/${queryType}?q=${query}`
      }
    }),
  })
})


export const { useGetRepositoryQuery } = githubApi;