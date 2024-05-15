import { baseApi } from './baseApi';

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderData) => {
        return {
          url: '/orders/init-payment',
          method: 'POST',
          body: orderData,
        };
      },
      invalidatesTags: ['products', 'product', 'orders'],
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
