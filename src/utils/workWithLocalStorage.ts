import { IFilmSmall, IFilmSmallWithFrame } from '../types/IFilmSmall';

export function addOftenSearchedFilm(info: IFilmSmall) {
    if (localStorage.length === 0) {
        localStorage.setItem('often-searched', JSON.stringify({}));
        localStorage.setItem('continue-watching', JSON.stringify({}));
    }

    const prev = localStorage.getItem('often-searched') ? JSON.parse(localStorage.getItem('often-searched')!) : {};
    localStorage.setItem('often-searched', JSON.stringify({ [info.posterUrlPreview]: info.kinopoiskId, ...prev }));
}

export function getOftenSearchedFilms(): IFilmSmall[] {
    let keys = Object.keys(localStorage.getItem('often-searched') ? JSON.parse(localStorage.getItem('often-searched')!) : {});
    let values = Object.values(localStorage.getItem('often-searched') ? JSON.parse(localStorage.getItem('often-searched')!) : {});

    if (keys.length > 8) {
        localStorage.setItem('often-searched', JSON.stringify({}));
        keys = keys.slice(0, 8);
        values = values.slice(0, 8);

        for (let i = 0; i < keys.length; i++) {
            const prev = localStorage.getItem('often-searched') ? JSON.parse(localStorage.getItem('often-searched')!) : {};

            if (Object.keys(prev).includes(keys[i])) {
                continue;
            }

            localStorage.setItem('often-searched', JSON.stringify({ ...prev, [keys[i]]: values[i] }));
        }
    }

    const result = [];

    for (let i = 0; i < keys.length; i++) {
        result.push({ posterUrlPreview: keys[i], kinopoiskId: values[i] });
    }

    return result as IFilmSmall[];
}

export function addContinueWatchingFilm(info: IFilmSmallWithFrame) {
    if (localStorage.length === 0) {
        localStorage.setItem('often-searched', JSON.stringify({}));
        localStorage.setItem('continue-watching', JSON.stringify({}));
    }

    const prev = localStorage.getItem('continue-watching') ? JSON.parse(localStorage.getItem('continue-watching')!) : {};
    localStorage.setItem('continue-watching', JSON.stringify({ [info.imageUrl]: info.kinopoiskId, ...prev }));
}

export function getContinueWatchingFilms(): IFilmSmallWithFrame[] {
    let keys = Object.keys(localStorage.getItem('continue-watching') ? JSON.parse(localStorage.getItem('continue-watching')!) : {});
    let values = Object.values(localStorage.getItem('continue-watching') ? JSON.parse(localStorage.getItem('continue-watching')!) : {});

    if (keys.length > 8) {
        localStorage.setItem('continue-watching', JSON.stringify({}));
        keys = keys.slice(0, 8);
        values = values.slice(0, 8);

        for (let i = 0; i < keys.length; i++) {
            const prev = localStorage.getItem('continue-watching') ? JSON.parse(localStorage.getItem('continue-watching')!) : {};

            if (Object.keys(prev).includes(keys[i])) {
                continue;
            }

            localStorage.setItem('continue-watching', JSON.stringify({ ...prev, [keys[i]]: values[i] }));
        }
    }

    const result = [];

    for (let i = 0; i < keys.length; i++) {
        result.push({ imageUrl: keys[i], kinopoiskId: values[i] });
    }

    return result as IFilmSmallWithFrame[];
}
