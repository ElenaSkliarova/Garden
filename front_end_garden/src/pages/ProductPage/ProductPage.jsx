import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchGetProductItem } from "../../asyncAction/requests";
import { useEffect } from "react";
import Button from "../../components/UI/Button/Button";
import s from './ProductPage.module.css';
import { addToCartAction } from "../../store/reducers/basketReducer";
import not_found from '../NotFoundPage/image_not_found/not_found.png';



function ProductPage(){

    const {pathname} = useLocation()
   
    const id = pathname.split('/')[2]
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchGetProductItem(id))
    }, [])

    const productItem = useSelector(store => store.productItem)
    console.log("productItem-----", productItem)   
    
    const {title, price, discont_price, description, image} = productItem || {};

    const discount_percentage = Math.round(((discont_price - price) / price ) * 100); 

    const onAddHandle = (e) => {
        dispatch(addToCartAction({id, title, price, discont_price, image}))
    }

    useEffect(() => {
        document.title = `${title}`
    }, [productItem])
    
    return(
        <>
            {(productItem.length === 0) ? 
                (<img className={s.not_found} src={not_found} alt="notFound_404" />) :                
                (<div className={s.product_container}>

                    <p className={s.title_product}>{title}</p>

                    <div className={s.product_content}>

                        <div className={s.img_product_container}>
                            <img className={s.img_product} src={`http://localhost:3333/${image}`} alt='product'/>                
                        </div>

                        <div className={s.product_info}>
                            <div className={s.price_container}>
                                {(discont_price) 
                                    ? <p className={s.current_price}>{discont_price.toFixed(2)}<span style={{fontSize: '20px'}}>$</span></p> 
                                    : <p className={s.current_price}>{price.toFixed(2)}$</p>}
                                {(discont_price) && <p className={s.old_price}>{price.toFixed(2)}$</p>}
                                {(discont_price) && <p className={s.discount_percentage}>{discount_percentage}%</p>}
                            </div>

                            <Button onClickFunc={onAddHandle} title={'To cart'} style_btn={'to_cart'}/>

                            <div className={s.product_description}>
                                <p className={s.description_title}>Description</p>
                                <p className={s.description_text}>{description}</p>
                            </div>
                        </div>

                    </div>          
           
                </div>
                )

            }


        </>
        
    )
}

export default ProductPage