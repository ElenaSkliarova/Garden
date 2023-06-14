import not_found from './image_not_found/not_found.png';
import s from './NotFoundPage.module.css';

function NotFoundPage(){
    return(
        <div className={s.not_found_container}>
            <img className={s.not_found_img} src={not_found} alt='not_found' />
        </div>
    )
}

export default NotFoundPage