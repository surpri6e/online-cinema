import MainPage from "./pages/MainPage";
import RegistrationPage from "./pages/RegistrationPage";
import { IRoute } from "./types/IRoute";

export const publicRoutes: IRoute[] = [
    {page: MainPage, path: ''},
    {page: RegistrationPage, path: '/registration'}
]

export const privateRoutes: IRoute[] = [

]