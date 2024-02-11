import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";
import { IFilmSmall } from "../types/IFilmSmall";
import { IFilmSearched } from "../types/IFilmSearched";


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
        }),
        getMovies: builder.query({
            query: () =>  {
                return {
                    url: `films/collections?type=TOP_POPULAR_MOVIES`,
                    headers: {
                        'X-API-KEY': config.X_API_KEY,
                        'Content-Type': 'application/json',
                    },
                }
            },
            transformResponse: (response: any): IFilmSmall[] => {
                return response.items;
            },
        }),
        getSeries: builder.query({
            query: () =>  {
                return {
                    url: `films/collections?type=TOP_250_TV_SHOWS`,
                    headers: {
                        'X-API-KEY': config.X_API_KEY,
                        'Content-Type': 'application/json',
                    },
                }
            },
            transformResponse: (response: any): IFilmSmall[] => {
                return response.items;
            }
        }),
        getFilmByKeywords: builder.query({
            query: (keyword: string) =>  {
                return {
                    url: `films?keyword=${keyword}`,
                    headers: {
                        'X-API-KEY': config.X_API_KEY,
                        'Content-Type': 'application/json',
                    },
                }
            },
            transformResponse: (response: any): IFilmSearched[] => {
                return response.items;
            }
        })
    }),
})

export const { useGetCartoonsQuery, useGetMoviesQuery, useGetSeriesQuery, useGetFilmByKeywordsQuery } = kinopoisApi