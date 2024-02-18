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