import s from './Button.module.css';

function Button({title, style_btn, onClickFunc}) {
    return(
        <button onClick={onClickFunc} className={`${s.btn} ${s[style_btn]}`} >
            {title}
        </button>
    )
}

export default Button