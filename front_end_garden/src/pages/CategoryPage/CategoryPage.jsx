import { useDispatch, useSelector } from "react-redux";
import { fetchGetCategoryItem } from "../../asyncAction/requests";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductItem from "../../components/UI/ProductItem/ProductItem";
import s from './CategoryPage.module.css';
import Filter from "../../components/UI/Filter/Filter";
import not_found from '../NotFoundPage/image_not_found/not_found.png';


function CategoryPage(){

    const {pathname} = useLocation();
   
    const id = pathname.split('/')[2];
    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetCategoryItem(id))
        window.scroll(0,0)
    }, [])

    const category = useSelector(store => store.categoryItem.category) || {};
    const dataCategory = useSelector(store => store.categoryItem.data) || [];
    const renderDataCategory = dataCategory.filter(el => el.showRange && el.showDiscount);
 
    useEffect(() => {
        document.title = `${category.title}`
    }, [category])

    const isCategory = Object.keys(category).length === 0 ? false : true;
    

    return(
        <>
            {isCategory ? 
                (<div>
                    <div className={s.category_title}>{category.title}</div>
                    <Filter />
                    <div className={s.category_container}>
                        {renderDataCategory.map(el => 
                            <ProductItem key={el.id} {...el}/>
                        )}                 
                    </div>
                </div>):
                ( 
                    <img className={s.not_found} src={not_found} alt="notFound_404" />
                )
            
            }
        </>
        
    )
}

export default CategoryPage