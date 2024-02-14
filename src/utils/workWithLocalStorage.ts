import { IFilmSmall } from "../types/IFilmSmall";

export function addOftenSearchedFilm(info: IFilmSmall) {
    if(localStorage.length === 0) {
        localStorage.setItem('often-searched', JSON.stringify({}));
        localStorage.setItem('continue-watch', JSON.stringify({}));
    }

    const prev = localStorage.getItem('often-searched') ? JSON.parse(localStorage.getItem('often-searched')!) : {}
    localStorage.setItem('often-searched', JSON.stringify({[info.posterUrlPreview]: info.kinopoiskId, ...prev}));
}

export function getOftenSearchedFilms(): IFilmSmall[] {
    let keys = Object.keys(localStorage.getItem('often-searched') ? JSON.parse(localStorage.getItem('often-searched')!) : {});
    let values = Object.values(localStorage.getItem('often-searched') ? JSON.parse(localStorage.getItem('often-searched')!) : {});

    if(keys.length > 10) {
        localStorage.setItem('often-searched', JSON.stringify({}));
        keys = keys.slice(0, 10);
        values = values.slice(0, 10);

        for(let i = 0; i < keys.length; i++) {
            const prev = localStorage.getItem('often-searched') ? JSON.parse(localStorage.getItem('often-searched')!) : {}

            if(Object.keys(prev).includes(keys[i])) {
                continue;
            }

            localStorage.setItem('often-searched', JSON.stringify({...prev, [keys[i]]: values[i]}));
        }
    }

    const result = [];

    for(let i = 0; i < keys.length; i++) {
        result.push({kinopoiskId: values[i], posterUrlPreview: keys[i]})
    }

    return result as IFilmSmall[];
}