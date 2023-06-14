import Button from '../UI/Button/Button';
import title_garden from './image_titleBlock/title_garden.png';
import s from './TitleBlock.module.css';

function TitleBlock({scrollToSalesBlock}){

    return(
        <div className={s.title_block_container}>
            <div className={s.title_block_info}>
                <h2>Sale</h2>
                <p>New season</p>
                <div className={s.btn_container}>
                   <Button onClickFunc={scrollToSalesBlock} title={'Sale'} style_btn={'sale'} />
                </div>
            </div>
            <div className={s.title_block_img}>
                <img className={s.title_img} src={title_garden} alt='garden' />
            </div>            
        </div>
    )
}
export default TitleBlock