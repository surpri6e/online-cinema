import { FC, useContext } from 'react'
import { IFilmSmall } from '../../types/IFilmSmall'
import { Link } from 'react-router-dom';
import { IsSearchingContext } from '../../context/isSearchingContext';
import banner from '../../images/often-searched.png';

interface IHeaderOftenSearched {
  items: IFilmSmall[];
}

const HeaderOftenSearched: FC<IHeaderOftenSearched> = ({items}) => {
  const {setIsSearching} = useContext(IsSearchingContext);

  return (
    <div className='header_often-searched'>
        <div className="_Container--header_often-searched">
            <div className="header_often-searhed_body">
                <div className="often-searched_left">
                  <div className="title often-searched_title">Often searched</div>
                  <div className="often-searched_images">
                    {
                      items.length === 0 
                      ?
                      <p>Haven't any searched :(</p>
                      :
                      items.map(item => <Link key={item.kinopoiskId} to={`film/${item.kinopoiskId}`} className='often-searched_image' onClick={() => setIsSearching(false)}>
                        <img src={item.posterUrlPreview} alt='often searched film'/>
                      </Link>)
                    }
                  </div>
                </div>
                <div className="often-searched_right">
                  <img src={banner} alt="banner"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderOftenSearched