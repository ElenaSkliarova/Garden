import logo from './images_header/logo.svg';
import s from './Header.module.css';
import Button from '../UI/Button/Button';
import { Link, useLocation } from 'react-router-dom';
import {SlHandbag} from 'react-icons/sl';
import { useSelector } from 'react-redux';
// import Burger from '../Burger/Burger';
import { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';



function Header(){

    const {pathname} = useLocation();

    const nav_menu = [
        {id: 1, title: 'Main page', pathname: '/'},
        {id: 2, title: 'All products', pathname: '/products/all'},
        {id: 3, title: 'All sales', pathname: '/sales/all'},
        {id: 4, title: 'Catalog', pathname: '/categories/all'},
        {id: 5, title: 'Cart', pathname: '/basket'}
    ];


    const [isBurger, setIsBurger] = useState(false);

    const basket = useSelector(store => store.basket);

    const total_products = basket.reduce((acc, el) =>{
        return acc + el.count
    },0)

    const render_menu = nav_menu.filter(el => {
        if(!isBurger){
           return el.title !== 'Catalog' && el.title !== 'Cart'
        }else{
           return el
        }
    })

    return(
        <div>
            <div className={s.header_wrapper}>
                <div className={s.logo_block}>
                    <img className={s.logo} src={logo} alt='logo'/>
                    <Link to='/categories/all' className={s.link}>
                        <Button title={'Catalog'} style_btn={'catalog'} />
                    </Link>                    
                </div>   

                <div className={ isBurger ? [s.nav_container, s.active].join(' ') : [s.nav_container]}>
                    {render_menu.map(el => 
                        <Link to={el.pathname} 
                            className={(pathname === el.pathname) ? s.active_link : s.link}
                            onClick={() => setIsBurger(false)}   
                            >
                            {el.title}   
                        </Link>)
                    }

                    {!isBurger && <Link to='/basket' className={s.link}>
                        <SlHandbag className={s.basket_icon}/>
                        <div className={s.counter_products}>{total_products}</div>  
                    </Link>  }                                                      
                </div>

                <div className={s.mobile_btn} onClick={() => setIsBurger(!isBurger)} >
                    {isBurger ? <AiOutlineClose className={s.mobile_btn_close} size={30}/> : <AiOutlineMenu size={30} />}
                </div>

            </div>          
        </div>
    )
}

export default Header