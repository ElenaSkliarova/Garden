import { Link } from 'react-router-dom';
import s from './CategoryItem.module.css';

function CategoryItem({id, title, image}){
  
    return(
        <div>
            {/* <Link to={{pathname: '/category/:id'}}> */}
             <Link to={`/category/${id}`}> 
                <div className={s.category_icon}>                
                    <div className={s.img_box}>
                        <img src={`http://localhost:3333/${image}`} alt='category foods' />
                    </div>           
                    <p>{title}</p>
                </div>
            </Link>
        </div>
    )   
}

export default CategoryItem