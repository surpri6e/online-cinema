import { IFilmSmall } from "../types/IFilmSmall";

export function addOftenSearchedFilm(info: IFilmSmall) {
    localStorage.setItem(info.kinopoiskId.toString(), info.posterUrlPreview);
}

export function getOftenSearchedFilms() {
    let keys = Object.keys(localStorage);
    let values = Object.values(localStorage);
    if(localStorage.length > 5) {
        localStorage.clear();
        keys = keys.slice(0, 6);
        values = values.slice(0, 6);
        for(let i = 0; i < keys.length; i++) {
            localStorage.setItem(keys[i], values[i])
        }
    }

    const result = [];

    for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.getItem(keys[i])) {
            result.push({kinopoiskId: Number(keys[i]), posterUrlPreview: localStorage.getItem(keys[i])})
        }
    }

    return result;
}