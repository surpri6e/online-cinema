import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const kinopoisApi = createApi({
    reducerPath: 'kinopoiskApi',
    baseQuery: fetchBaseQuery({baseUrl: ''}),
    // endpoints: () =>
})