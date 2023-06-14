import { Link } from 'react-router-dom';
import s from './ProductItem.module.css';
import Button from '../Button/Button';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../../store/reducers/basketReducer';


function ProductItem({id, title, price, discont_price, description, image}){

    const dispatch = useDispatch();
    const imgRef = useRef(null);

    const discount_percentage = Math.round(((discont_price - price) / price ) * 100); 

    const [showBtn, setShowBtn] = useState(false);

    const onAddHandler = (e) => {
        // console.log('clickOnProductItemAction')
        dispatch(addToCartAction({id, title, image, price, discont_price}))
    }

    const linkClickHandler = (e) => {
        if(imgRef.current !== e.target) {
            e.preventDefault()
        }
    }

    return(
        <div>
            <Link to={`/product/${id}`} onClick={linkClickHandler}>
                <div className={s.product_item}>

                    <div 
                        onMouseOver={() => setShowBtn(true)}
                        onMouseOut={() => setShowBtn(false)}
                        className={s.product_img_wrapper}
                    >
                        <img className={s.product_img} ref={imgRef} src={`http://localhost:3333/${image}`} alt={'Image product'} />
                        {(showBtn) && <Button 
                                            onClickFunc={onAddHandler} 
                                            title={'Add to cart'} 
                                            style_btn={'add_to_cart'}
                                        />}
                    </div>   

                    <div className={s.info}>
                        <div className={s.product_info}>
                            {(discont_price) 
                                ?<p className={s.current_price}>{discont_price.toFixed(2)}<span style={{fontSize: '20px'}}>$</span></p> 
                                : <p className={s.current_price}>{price.toFixed(2)}<span style={{fontSize: '20px'}}>$</span></p>}
                            {(discont_price) && <p className={s.old_price}>{price.toFixed(2)}$</p>}
                            {(discont_price) && <p className={s.sale}>{discount_percentage}%</p>}
                        </div>

                        <p className={s.title_p}>{title}</p>
                    </div>           
                    
                    

                </div>
            </Link>
        </div>
    )
}

export default ProductItem