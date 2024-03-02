import movies from '../images/icons/fluent.png';
import series from '../images/icons/video-player.png';
import cartoons from '../images/icons/popcorn.png';
import top from '../images/icons/top.png';
import like from '../images/icons/favorite-3.png';
import looked from '../images/icons/bookmark.png';
import { IMainCategory } from '../types/IMainCategory';
import { CARTOONS_PAGE_PATH, LIKE_PAGE_PATH, LOOKED_PAGE_PATH, MOVIES_PAGE_PATH, SERIES_PAGE_PATH, TOP_PAGE_PATH } from '../paths';

export const mainCategories: IMainCategory[] = [
    { path: movies, title: 'Movies', to: MOVIES_PAGE_PATH },
    { path: series, title: 'Series', to: SERIES_PAGE_PATH },
    { path: cartoons, title: 'Cartoons', to: CARTOONS_PAGE_PATH },
    { path: top, title: 'Top', to: TOP_PAGE_PATH },
    { path: like, title: 'Like', to: LIKE_PAGE_PATH },
    { path: looked, title: 'Looked', to: LOOKED_PAGE_PATH },
];
