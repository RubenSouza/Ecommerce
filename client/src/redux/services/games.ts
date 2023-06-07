import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gameApi = createApi({
  reducerPath: "gameApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/v1/api",
    prepareHeaders: headers => {
      headers.set(
        "Authorization",
        `Bearer ${sessionStorage.getItem("accessToken")}`
      );

      return headers;
    },
  }),
  endpoints: builder => ({
    getGames: builder.query({
      query: ({ pageId, sort, price }) =>
        `/games/?page=${pageId}&sort=${sort}&price=${price}`,
    }),
    getGame: builder.query({
      query: ({ gameId }) => `/games/${gameId}`,
    }),
    getCategoryGames: builder.query({
      query: ({ categoryId, pageId, sort, price }) =>
        `/categories/${categoryId}/games/?page=${pageId}&sort=${sort}&price=${price}`,
    }),
    getCategories: builder.query({
      query: () => "/categories",
    }),
    getSearchedGames: builder.query({
      query: ({ pageId, sort, search }) =>
        `/games/search/?page=${pageId}&sort=${sort}&search=${search}`,
    }),
    getHome: builder.query({
      query: () => "/home/64807865637402416a785273",
    }),
    getPublisherGames: builder.query({
      query: ({ publisherId }) => `/publishers/${publisherId}`,
    }),
  }),
});

export const {
  useGetGamesQuery,
  useGetGameQuery,
  useGetCategoryGamesQuery,
  useGetCategoriesQuery,
  useGetSearchedGamesQuery,
  useGetHomeQuery,
  useGetPublisherGamesQuery,
} = gameApi;
