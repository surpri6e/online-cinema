export type TTypesOfFilm = 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'VIDEO';

export interface IFilmSearched {
    kinopoiskId: number;
    nameOriginal: string;
    nameRu: string;
    nameEn: string;
    ratingKinopoisk: number;
    type: TTypesOfFilm;
}
