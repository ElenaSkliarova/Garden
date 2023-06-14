import { useDispatch } from "react-redux";
import { useState } from "react";
import s from './Filter.module.css';
import { useLocation } from "react-router-dom";
import { filterByRangeCategoryProductsAction, filterBySaleCategoryProductsAction, selectCategoryProductsAction } from "../../../store/reducers/categoryItemReducer";
import { filterByRangeAllProductsAction, filterBySaleAllProductsAction, selectAllProductsAction } from "../../../store/reducers/productsReducer";

function Filter(){

    const [range, setRange] = useState({from: '', to: ''})

    const dispatch = useDispatch();

    const {pathname} = useLocation()
    // console.log('Pathname', pathname);

    const handleInput = (e) => {
      
        const targetInput = e.target.name;
		const newValue = e.target.value;

        setRange((prevRange) => ({
            ...prevRange,
            [targetInput]: newValue,
        }));

        const newRange = {
            from: targetInput === 'from' ? newValue : range.from || -Infinity,
            to: targetInput === 'to' ? newValue : range.to || Infinity,
        };

        if(pathname.includes('category')){
            dispatch(filterByRangeCategoryProductsAction(newRange))
            return 
        }
        else if(pathname.includes('products') || pathname.includes('sales')){
            dispatch(filterByRangeAllProductsAction(newRange))
            return 
        }                 
    }

    const handleCheckbox = (e) => {
        if(pathname.includes('category')){
            dispatch(filterBySaleCategoryProductsAction(e.target.checked))
            return 
        }else if(pathname.includes('products')){
            dispatch(filterBySaleAllProductsAction(e.target.checked))
            return
        } 
    }

    const handleSelect = (e) => {
        if(pathname.includes('category')){
            dispatch(selectCategoryProductsAction(e.target.value))
            return 
        }else if(pathname.includes('products') || pathname.includes('sales')){
            dispatch(selectAllProductsAction(e.target.value))
            return 
        }   
    }

    return(
        <div className={s.filter_wrapper}>
            <div className={s.filter_item_wrapper}>
                <label className={s.label_filter}>Price:</label>                   
                <input className={s.input_range} 
                    onChange={handleInput} 
                    value={range.from} 
                    type='number' 
                    step='1' 
                    min='1' 
                    max='Infinity' 
                    name='from' 
                    placeholder='from' 
                />
                <input className={s.input_range} 
                    onChange={handleInput} 
                    value={range.to} 
                    type='number' 
                    step='1' 
                    min='1' 
                    max='Infinity' 
                    name='to' 
                    placeholder='to' />
            </div>

            {(!pathname.includes('sales'))  && <div className={s.filter_item_wrapper}>
                <label className={s.label_filter}>Discounted items:</label>
                <input className={s.checkbox_filter} onClick={handleCheckbox} 
                    type='checkbox' name='checkbox'
                />                
            </div>}

            <div className={s.filter_item_wrapper}>
                <label className={s.label_filter}> Sorted:</label>
                <select defaultValue='default' className={s.select_filter} onInput={handleSelect}>
                    <option value='default'>not sorted</option>
                    <option value='ascending'>sort ascending</option>
                    <option value='descending'>sort descending</option>
                    <option value='az'>sort by name A-Z</option>
                    <option value='za'>sort by name Z-A</option>                        
                </select>               
            </div>
            
        </div>
    )
}

export default Filter