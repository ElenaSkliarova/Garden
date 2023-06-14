import {useForm} from 'react-hook-form';
import Button from '../Button/Button';
import s from './Form.module.css';
import { fetchPostGetSale } from '../../../asyncAction/requests';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cleanBasketAction } from '../../../store/reducers/basketReducer';


function Form({title, style_btn, style_warning, placeholder, fetchPostRequest}){

    let {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({mode: 'onSubmit'})

    const phoneInput = register('phoneNumber', {
        required: 'Phone is required',
        pattern: {
            value: /^\+49\d{9}$/,
            message: 'Phone number must start with +49 and contain 11 digits !'
        }
    })

    const {pathname} = useLocation();

    let basket = useSelector(store => store.basket);
    
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        if(pathname === '/basket'){
            fetchPostRequest([data, ...basket])
            dispatch(cleanBasketAction())
        } else {
            fetchPostRequest(data)
        }
        reset()
    }

    return(
        <div className={s.form_container}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className={`${s.input} ${s[style_btn]}`} {...phoneInput} placeholder={placeholder}/>
                {errors.phoneNumber && <p className={`${s.warning} ${s[style_warning]}`}>{errors.phoneNumber.message}</p>}

                <Button title={title} style_btn={style_btn}/>
            </form>
        </div>
    )
}

export default Form