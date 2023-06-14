import { Link } from 'react-router-dom';
import s from './Footer.module.css';
import {SiInstagram, SiWhatsapp} from 'react-icons/si';

function Footer(){
    return(
        <div className={s.footer_container}>
            <div className={s.footer_info}>
                <div className={s.contact}>
                    <p className={s.title_info}>Contact</p>
                    <p className={s.number_info}>+49 999 999 99 99</p>
                    <div className={s.messengers_container}>
                        <div className={s.messenger}>
                            <Link to='https://www.instagram.com/'>
                                <SiInstagram className={s.messenger_icon}/>
                            </Link>                            
                            <p>instagram</p>
                        </div>
                        <div className={s.messenger}>
                            <Link to='https://www.whatsapp.com/'>
                                <SiWhatsapp className={s.messenger_icon}/>
                            </Link>                            
                            <p>WhatsApp</p>
                        </div>                    
                    </div>
                </div>

                <div className={s.address}>
                    <p className={s.title_info}>Address</p>
                    <a className={s.address_info} href='Linkstraße 2, 8 OG, 10785, Berlin, Deutschland'>
                        Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
                    </a>
                    <p className={s.address_hours}>Working Hours:</p>
                    <p className={s.address_long_hours}>24 hours a day</p>
                </div>
            </div>

            <div className={s.map} >
                <iframe width="100%" 
                        height="525" 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight="0" 
                        marginWidth="0" 
                        title="googleMap"
                        src="https://maps.google.com/maps?width=100%25&amp;height=525&amp;hl=en&amp;q=Tel-Ran.deGmbH+(GoogleMap)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>
        </div>
    )
}

export default Footer