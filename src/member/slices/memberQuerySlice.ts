import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../config'
import { Member } from '../types'

export const memberQuerySlice = createApi({
  reducerPath: 'memberQuerySlice',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api/members`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')

      headers.set('Authorization', `Bearer ${token}`)
      return headers
    },
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: '',
        method: 'GET',
      }),
      providesTags: ['Post'],
    }),

    createUser: builder.mutation<Member, Member>({
      query: (item) => ({
        url: ``,
        method: 'POST',
        body: item,
      }),
    }),
  }),
})

export const { useGetUsersQuery, useCreateUserMutation } = memberQuerySlice
