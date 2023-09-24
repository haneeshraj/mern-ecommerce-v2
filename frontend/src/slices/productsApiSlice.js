import { PRODUCTS_URL, UPLOAD_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ pageNumber }) => ({
        url: PRODUCTS_URL,
        params: {
          pageNumber,
        },
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Product'], // For query caching,  it doesnt save the cache
    }),

    getProductDetails: builder.query({
      query: (id) => ({ url: `${PRODUCTS_URL}/${id}` }),
      keepUnusedDataFor: 5,
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({ url: `${PRODUCTS_URL}/${id}`, method: 'DELETE' }),
    }),

    createProduct: builder.mutation({
      query: () => ({
        url: PRODUCTS_URL,
        method: 'POST',
      }),
      invalidatesTags: ['Product'], // for mutation caching, it doesnt save the cache
    }),

    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Products'],
    }),

    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}`,
        method: 'POST',
        body: data,
      }),
    }),

    createReview: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}/reviews`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useCreateReviewMutation,
} = productsApiSlice;
