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
      query: ({ pageId }) => `/games/?page=${pageId}`,
    }),
    getDeveloper: builder.query({
      query: ({ developerId }) => `/developers/${developerId}`,
    }),
  }),
});

export const { useGetGamesQuery, useGetDeveloperQuery } = gameApi;
