import { useSelector } from 'react-redux';
import Form from '../UI/Form/Form';
import s from './BasketOrder.module.css';
import { fetchPostOrderSend } from '../../asyncAction/requests';


function BasketOrder (){

    const basket = useSelector(store => store.basket);

    const total_sum = basket.reduce((acc, el) => {
        return acc + (el.count * ((el.discont_price) ? el.discont_price : el.price)) 
    }, 0).toFixed(2)

    return(
        <div className={s.order_container}>
            <p className={s.order_title}>Order details</p>
            <div className={s.total_container}>
                <p className={s.total_title}>Total</p>
                <p className={s.total_sum}>{total_sum}<span style={{fontSize: '10px'}}>$</span></p>
            </div>
            <Form
                title={'Order'} 
                style_btn={'basket_order'} 
                style_warning={'warning_order'}
                placeholder={'Phone number'} 
                fetchPostRequest={fetchPostOrderSend}/>

        </div>
    )
}

export default BasketOrder