import CategoryItem from "../CategoryItem/CategoryItem";
import s from './CategoriesList.module.css';


function CategoriesList({renderArray}){
    return(
        <div className={s.categories_container}>
            {renderArray.map(el => 
                <CategoryItem key={el.id} {...el}/>
            )}
        </div>
    )
}

export default CategoriesList