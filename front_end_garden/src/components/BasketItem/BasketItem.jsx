import { useDispatch } from 'react-redux';
import s from './BasketItem.module.css';
import {HiMinus, HiPlus} from 'react-icons/hi';
import {RxCross2} from 'react-icons/rx';
import { addProductAction, deleteProductAction, reduceProductAction } from '../../store/reducers/basketReducer';


function BasketItem({id, title, image, price, discont_price, count}){

    const dispatch = useDispatch();

    return(
        <div className={s.basket_item_container}>
            <button onClick={() => dispatch(deleteProductAction(id))} className={s.cross}><RxCross2/></button>
            <img className={s.img_item} src={`http://localhost:3333/${image}`} />

            <div className={s.basket_mobile}>
                <div className={s.counter_container}>
                    <p className={s.title}>{title}</p>

                    <div className={s.counter}>
                        <button onClick={() => dispatch(reduceProductAction(id))}className={s.counter_btn}><HiMinus className={s.sign}/></button>
                        <p>{count}</p>
                        <button onClick={() => dispatch(addProductAction(id))} className={s.counter_btn}><HiPlus className={s.sign}/></button>
                    </div>
                </div>
                
                <div className={s.price_container}>
                    <div className={s.current_price}>
                        {(discont_price) 
                        ? <p >{discont_price.toFixed(2)}<span style={{fontSize: '20px'}}>$</span></p> 
                        : <p>{price.toFixed(2)}<span style={{fontSize: '20px'}}>$</span></p>}
                    </div> 
                    <div className={s.old_price}>
                        {(discont_price) && 
                        <p >{price.toFixed(2)}<span style={{fontSize: '20px'}}>$</span></p>}
                    </div>
                </div>                      
            </div>                   
        </div>
    )
}

export default BasketItem