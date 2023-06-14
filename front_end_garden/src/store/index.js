import {createStore, combineReducers, applyMiddleware} from 'redux';
import { categoriesReducer } from './reducers/categoriesReducer';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/productsReducer';
import { categoryItemReducer } from './reducers/categoryItemReducer';
import { productItemReducer } from './reducers/productItemReducer';
import {basketReducer} from './reducers/basketReducer';


const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    categoryItem: categoryItemReducer, 
    productItem: productItemReducer,
    basket: basketReducer,  
})


export const store = createStore(rootReducer, applyMiddleware(thunk))