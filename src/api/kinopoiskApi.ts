import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";
import { IFilmSmall } from "../types/IFilmSmall";


export const kinopoisApi = createApi({
    reducerPath: 'kinopoiskApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2/'}),
    endpoints: (builder) => ({
        getCartoons: builder.query({
            query: () =>  {
                return {
                    url: `films/collections?type=KIDS_ANIMATION_THEME`,
                    headers: {
                        'X-API-KEY': config.X_API_KEY,
                        'Content-Type': 'application/json',
                    },
                }
            },
            transformResponse: (response: any): IFilmSmall[] => {
                return response.items;
            },
        })
    }),
})

export const { useGetCartoonsQuery } = kinopoisApi