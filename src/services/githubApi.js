import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseUrl = 'https://api.github.com';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getRepository: builder.query({
      query: (args) => {
        const { query, queryType, page } = args;
        return `search/${queryType}?q=${query}&page=${page}`
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      merge: (currentCache, newItems) => {
        console.log(currentCache);
        currentCache.items.push(...newItems.items)
        console.log(currentCache);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },

    }),
  })
})


export const { useGetRepositoryQuery } = githubApi;