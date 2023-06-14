import { fetchPostGetSale } from '../../asyncAction/requests';
import Form  from '../UI/Form/Form';
import s from './SaleGetBlock.module.css';
import gnome from './images_saleGetBlock/gnome.png';

function SaleGetBlock(){
    return(
        <div className={s.sale_get_wrapper}>
            <div className={s.gnome_img}>
                <img src={gnome} alt='gnome'/>
            </div>
            <div className={s.sale_get_form_wrapper}>
                <div className={s.sale_get_text}>
                    <h2>5% off </h2>
                    <p>on the first order</p>                
                </div>
                <Form 
                    title={'Get a discount'} 
                    style_btn={'input_submit'} 
                    style_warning={'warning_input'}
                    placeholder={'+49'} 
                    fetchPostRequest={fetchPostGetSale}
                />
            </div>            
        </div>
    )
}

export default SaleGetBlock