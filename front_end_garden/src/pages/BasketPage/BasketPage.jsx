import { useDispatch, useSelector } from 'react-redux';
import s from './BasketPage.module.css';
import BasketItem from '../../components/BasketItem/BasketItem';
import { Link } from 'react-router-dom';
import {IoIosArrowForward} from 'react-icons/io';
import BasketOrder from '../../components/BasketOrder/BasketOrder';
import { useEffect } from 'react';




function BasketPage(){

    useEffect(()=>{
        document.title = 'Cart'
    }, [])

    const dispatch = useDispatch();

    const basket = useSelector(store => store.basket);
    console.log('BASKET----', basket);

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket])

    return(
        <div className={s.basket}>
            <div className={s.basket_header}>
                <p className={s.basket_title}>Shopping cart</p>
                 
            </div>            

            <div className={s.basket_container}>
                <div className={s.basket_info}>

                    <Link to='/categories/all'>
                        <div className={s.link_store}>
                            Back to the store <IoIosArrowForward />
                        </div>             
                    </Link> 

                    <div className={s.items_basket}> 
                        {(basket.length === 0) 
                        ? <p className={s.cart_empty}>Cart is empty!</p> 
                        : basket.map(el => <BasketItem key={el.id} {...el}/>)}
                    </div>
                </div>
                
                <div className={s.order}>
                    <BasketOrder />
                </div>                
            </div>            
        </div>
    )
}

export default BasketPage