import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";


export const kinopoisApi = createApi({
    reducerPath: 'kinopoiskApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2/'}),
    endpoints: (builder) => ({
        getTestData: builder.query({
            query: () =>  {
                return {
                    url: `films/collections?type=KIDS_ANIMATION_THEME`,
                    headers: {
                        'X-API-KEY': config.X_API_KEY,
                        'Content-Type': 'application/json',
                    }
                }
            },
        })
    }),
})

export const { useGetTestDataQuery } = kinopoisApi