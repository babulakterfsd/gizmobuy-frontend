import { baseApi } from './baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => {
        return {
          url: '/auth/login',
          method: 'POST',
          body: loginData,
        };
      },
      invalidatesTags: ['user'],
    }),
    signup: builder.mutation({
      query: (signupData) => {
        return {
          url: '/auth/register',
          method: 'POST',
          body: signupData,
        };
      },
      invalidatesTags: ['user'],
    }),
    getProfile: builder.query({
      query: () => {
        return {
          url: '/auth/get-profile',
          method: 'GET',
        };
      },
      providesTags: ['user'],
    }),
    updateProfile: builder.mutation({
      query: (profileDataToBeUpdated) => {
        return {
          url: '/auth/update-profile',
          method: 'PUT',
          body: profileDataToBeUpdated,
        };
      },
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} = authApi;
