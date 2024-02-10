import MainPage from "./pages/MainPage";
import RegistrationPage from "./pages/RegistrationPage";
import { IRoute } from "./types/IRoute";
import { MAIN_PAGE_PATH, REGISTRATION_PAGE_PATH } from './paths' 

export const publicRoutes: IRoute[] = [
    {page: MainPage, path: MAIN_PAGE_PATH},
    {page: RegistrationPage, path: REGISTRATION_PAGE_PATH}
]

export const privateRoutes: IRoute[] = [

]