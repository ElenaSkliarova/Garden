import { useDispatch, useSelector } from "react-redux";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import s from './CategoriesListPage.module.css';
import { useEffect } from "react";
import { fetchGetCategories } from "../../asyncAction/requests";


function CategoriesListPage(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetCategories())
        window.scroll(0,0)
    }, []);

    const categoriesAll = useSelector(store => store.categories);

    useEffect(() => {
        document.title = 'Categories'
    }, [])

    return(
        <div>
            <p className={s.categories_title}>Categories</p>
            <CategoriesList renderArray={categoriesAll} />
        </div>
    )
}

export default CategoriesListPage