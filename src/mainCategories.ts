import movies from './images/icons/fluent.png'
import series from './images/icons/video-player.png'
import cartoons from './images/icons/popcorn.png'
import top from './images/icons/top.png'
import like from './images/icons/favorite-3.png'
import looked from './images/icons/bookmark.png'
import { IMainCategory } from './types/IMainCategory'

export const mainCategories: IMainCategory[] = [
    {path: movies, title: 'Movies'},
    {path: series, title: 'Series'},
    {path: cartoons, title: 'Cartoons'},
    {path: top, title: 'Top'},
    {path: like, title: 'Like'},
    {path: looked, title: 'Looked'}
];