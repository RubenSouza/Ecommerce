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
      query: ({ pageId, sort }) => `/games/?page=${pageId}&sort=${sort}`,
    }),
    getGame: builder.query({
      query: ({ gameId }) => `/games/${gameId}`,
    }),
    getCategoryGames: builder.query({
      query: ({ categoryId, pageId, sort }) =>
        `/categories/${categoryId}/games/?page=${pageId}&sort=${sort}`,
    }),
    getCategories: builder.query({
      query: () => "/categories",
    }),
  }),
});

export const {
  useGetGamesQuery,
  useGetGameQuery,
  useGetCategoryGamesQuery,
  useGetCategoriesQuery,
} = gameApi;
