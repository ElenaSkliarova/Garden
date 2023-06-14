import { useEffect } from "react";
import Button from "../UI/Button/Button";
import s from './CatalogBlock.module.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchGetCategories } from "../../asyncAction/requests";
import {Link} from 'react-router-dom';
import CategoriesList from "../CategoriesList/CategoriesList";

function CatalogBlock(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetCategories())
    }, [])

    const categoriesAll = useSelector(store => store.categories)

    const renderCategories = categoriesAll.slice(0,4);
    
    return(
        <div>
            <div className={s.catalog_title}>
                <p>Catalog</p>
                <Link to='/categories/all' className={s.link}>
                    <Button title={'All categories'} style_btn={'all_categories'}/>
                </Link>                
            </div>
            <CategoriesList renderArray={renderCategories}/>
        </div>
    )
}

export default CatalogBlock