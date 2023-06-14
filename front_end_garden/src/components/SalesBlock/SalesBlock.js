import { forwardRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchGetProducts } from "../../asyncAction/requests";
import ProductItem from "../UI/ProductItem/ProductItem";
import s from './SalesBlock.module.css';


const SalesBlock = forwardRef((props, ref) => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetProducts())
    },[])

    const products = useSelector(store => store.products);
    // console.log('product---', products)

    const discountedProducts = products.filter(el => el.discont_price !== null)
    // console.log('discountedProducts----------', discountedProducts);

    const getRandomItems = (itemsToFilter = [], newItems = []) => {
        if(itemsToFilter.length < 3) {
            return itemsToFilter;
        }

        if(newItems.length < 3) {
            const randomItem = itemsToFilter[Math.floor(Math.random() * itemsToFilter.length)];
            const isItemExist = newItems.find(el => el.id === randomItem.id);

            if(isItemExist) {
                getRandomItems(itemsToFilter, newItems);
            } else {
                newItems.push(randomItem);
                getRandomItems(itemsToFilter, newItems);
            }
        }
        return newItems;
    }    

    const renderProducts = getRandomItems(discountedProducts)
// console.log('renderProducts------------', renderProducts)
    return(
        <div className={s.sales_block_container} ref={ref}>
            <p className={s.sale_p}>Sale</p>
            <div className={s.sales_block}>
                {renderProducts.map(el =>
                     <ProductItem key={el.id} {...el} />
                )}
            </div>        
        </div>
    )
})

export default SalesBlock