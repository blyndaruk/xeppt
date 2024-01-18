import { createApi } from '@reduxjs/toolkit/query/react';

import baseQuery from '../utils/queries';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery(),
  tagTypes: ['AccountInfo'],
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        data: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: 'auth/register',
        method: 'POST',
        data: userData,
      }),
    }),
    refreshToken: builder.query<any, any>({
      query: () => ({
        url: 'auth/refresh',
        isAuthorized: true,
      }),
    }),
    getCurrentUser: builder.query<any, any>({
      query: () => ({
        url: 'account',
        isAuthorized: true,
      }),
      providesTags: ['AccountInfo'],
      keepUnusedDataFor: 0,
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetCurrentUserQuery,
  useRefreshTokenQuery,
} = authApi;
