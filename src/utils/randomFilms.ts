import { IFilmSmall } from "../types/IFilmSmall";

export function randomFilms(films: IFilmSmall[]): IFilmSmall[] {
    const randomNumber = Math.floor(Math.random() * 10);
    return films.slice(randomNumber, randomNumber + 10);
}