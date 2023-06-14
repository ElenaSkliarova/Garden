import { useDispatch, useSelector } from "react-redux"
import Filter from "../../components/UI/Filter/Filter"
import ProductItem from "../../components/UI/ProductItem/ProductItem"
import s from './ProductsListPage.module.css'
import { useEffect } from "react"
import { fetchGetProducts } from "../../asyncAction/requests"


function ProductsListPage(){

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchGetProducts())
        window.scroll(0,0)
    }, [])

    const products = useSelector(store => store.products).filter(el => el.showRange && el.showDiscount)
    // console.log("products--", products)

    useEffect(() => {
        document.title = 'All products'
    }, [])

    return(
        <div>
            <p className={s.products_title}>All products</p>
            <Filter />
            <div className={s.products_container}>
                {products.map(el => 
                    <ProductItem key={el.id} {...el}/>
                    )}
            </div>
        </div>
    )
}

export default ProductsListPage