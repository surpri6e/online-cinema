import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";
import { IFilmFrame, IFilmSmall, IFilmSmallWithGenres } from "../types/IFilmSmall";
import { IFilmSearched } from "../types/IFilmSearched";
import { KINOPOISK_API_LINK } from "../constants";
import { IFilm } from "../types/IFilm";


export const kinopoisApi = createApi({
    reducerPath: 'kinopoiskApi',
    baseQuery: fetchBaseQuery({baseUrl: KINOPOISK_API_LINK}),
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
        }),
        getFilmById: builder.query<IFilm, string>({
            query: (id: string) =>  {
                return {
                    url: `films/${id}`,
                    headers: {
                        'X-API-KEY': config.X_API_KEY,
                        'Content-Type': 'application/json',
                    },
                }
            },
        }),
        getFramesById: builder.query({ // дописать тут типы
            query: (id: string) =>  {
                return {
                    url: `films/${id}/images`,
                    headers: {
                        'X-API-KEY': config.X_API_KEY,
                        'Content-Type': 'application/json',
                    },
                }
            },
            transformResponse: (response: any): IFilmFrame[] => {
                return response.items;
            }
        }),
        getMoviesPages: builder.query({
            query: (page: number) =>  {
                return {
                    url: `films/collections?type=TOP_POPULAR_MOVIES&page=${page}`,
                    headers: {
                        'X-API-KEY': config.X_API_KEY,
                        'Content-Type': 'application/json',
                    },
                }
            },
            transformResponse: (response: any): IFilmSmallWithGenres[] => {
                return response.items;
            },
        }),
        getCartoonsPages: builder.query({
            query: (page: number) =>  {
                return {
                    url: `films/collections?type=KIDS_ANIMATION_THEME&page=${page}`,
                    headers: {
                        'X-API-KEY': config.X_API_KEY,
                        'Content-Type': 'application/json',
                    },
                }
            },
            transformResponse: (response: any): IFilmSmallWithGenres[] => {
                return response.items;
            },
        }),
        getSeriesPages: builder.query({
            query: (page: number) =>  {
                return {
                    url: `films/collections?type=TOP_250_TV_SHOWS&page=${page}`,
                    headers: {
                        'X-API-KEY': config.X_API_KEY,
                        'Content-Type': 'application/json',
                    },
                }
            },
            transformResponse: (response: any): IFilmSmallWithGenres[] => {
                return response.items;
            }
        }),
    }),
})

export const { useGetCartoonsQuery, useGetMoviesQuery, useGetSeriesQuery, useGetFilmByKeywordsQuery, useGetFilmByIdQuery, useGetFramesByIdQuery, useGetMoviesPagesQuery, useGetCartoonsPagesQuery, useGetSeriesPagesQuery } = kinopoisApi