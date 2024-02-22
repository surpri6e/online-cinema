export interface IFilmSmall {
    posterUrlPreview: string;
    kinopoiskId: number;
}

export interface IFilmFrame {
    imageUrl: string;
}

export interface IFilmSmallWithFrame extends IFilmFrame {
    kinopoiskId: number;
}

export interface IFilmGenre {
    genre: string;
}

export interface IFilmSmallWithGenres extends IFilmSmall {
    genres: IFilmGenre[]
}