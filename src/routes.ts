import MainPage from "./pages/MainPage";
import RegistrationPage from "./pages/RegistrationPage";
import { IRoute } from "./types/IRoute";
import { CARTOONS_PAGE_PATH, FILM_PAGE_PATH, LIKE_PAGE_PATH, LOOKED_PAGE_PATH, MAIN_PAGE_PATH, MOVIES_PAGE_PATH, REGISTRATION_PAGE_PATH, SERIES_PAGE_PATH, SUPPORT_PAGE_PATH, TOP_PAGE_PATH, YOU_PAGE_PATH } from './paths' 
import FilmPage from "./pages/FilmPage";
import CartoonsPage from "./pages/CartoonsPage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import SupportPage from "./pages/SupportPage";
import TopPage from "./pages/TopPage";
import LikePage from "./pages/LikePage";
import LookedPage from "./pages/LookedPage";
import YouPage from "./pages/YouPage";

export const publicRoutes: IRoute[] = [
    {page: MainPage, path: MAIN_PAGE_PATH},
    {page: RegistrationPage, path: REGISTRATION_PAGE_PATH},
    {page: FilmPage, path: FILM_PAGE_PATH},
    {page: CartoonsPage, path: CARTOONS_PAGE_PATH},
    {page: MoviesPage, path: MOVIES_PAGE_PATH},
    {page: SeriesPage, path: SERIES_PAGE_PATH},
    {page: SupportPage, path: SUPPORT_PAGE_PATH},
    {page: TopPage, path: TOP_PAGE_PATH},
]

export const privateRoutes: IRoute[] = [
    {page: MainPage, path: MAIN_PAGE_PATH},
    {page: FilmPage, path: FILM_PAGE_PATH},
    {page: CartoonsPage, path: CARTOONS_PAGE_PATH},
    {page: MoviesPage, path: MOVIES_PAGE_PATH},
    {page: SeriesPage, path: SERIES_PAGE_PATH},
    {page: SupportPage, path: SUPPORT_PAGE_PATH},
    {page: TopPage, path: TOP_PAGE_PATH},
    {page: LikePage, path: LIKE_PAGE_PATH},
    {page: LookedPage, path: LOOKED_PAGE_PATH},
    {page: YouPage, path: YOU_PAGE_PATH},
]