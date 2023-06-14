import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGetProducts } from "../../asyncAction/requests"
import Filter from "../../components/UI/Filter/Filter"
import ProductItem from "../../components/UI/ProductItem/ProductItem"
import s from './SalesListPage.module.css'

function SalesListPage(){

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchGetProducts())
        window.scroll(0,0)
    }, [])

    const products = useSelector(store => store.products).filter(el => el.showRange && el.showDiscount)
    const saleListProducts = products.filter(el => el.discont_price !== null)
    
    useEffect(() => {
        document.title = 'Products with sale'
    }, [])
    
    return(
        <div>
            <p className={s.sales_title}>Products with sale</p>
            <Filter />
            <div className={s.sales_container}>
                {saleListProducts.map(el => 
                    <ProductItem key={el.id} {...el}/>
                    )}
            </div>
        </div>
    )
}

export default SalesListPage