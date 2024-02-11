import MainCategory from './design/MainCategory/MainCategory';
import '../styles/pages/MainPage/MainCategories.scss';
import { mainCategories } from '../utils/mainCategories';


const MainCategories = () => {
  return (
    <div className='main_categories'>
        {
            mainCategories.map(category => <MainCategory path={category.path} title={category.title} key={category.path}/>)
        }
    </div>
  )
}

export default MainCategories