import { getCategoriesAction } from "../store/reducers/categoriesReducer"
import { getCategoryItemAction } from "../store/reducers/categoryItemReducer"
import { getProductItemAction } from "../store/reducers/productItemReducer"
import { getProductsAction } from "../store/reducers/productsReducer"


export const fetchGetCategories = () => {
    return function(dispatch){
        const url = 'http://localhost:3333/categories/all'
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(getCategoriesAction(data)))
    }
}

export const fetchGetProducts = () => {
    return function(dispatch){
        const url = 'http://localhost:3333/products/all'
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(getProductsAction(data)))
    }
}

export const fetchGetCategoryItem = (id) => {
    return function(dispatch){
        const url = `http://localhost:3333/categories/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(getCategoryItemAction(data)))
    }
}

export const fetchGetProductItem = (id) => {
    return function(dispatch){
        const url = `http://localhost:3333/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(getProductItemAction(data)))
    }
}

export const fetchPostGetSale = (data) => {
        const url = 'http://localhost:3333/sale/send'
        fetch(url, {
            method: 'POST',
            headers: {'Content-type': 'application/json;charset=UTF-8'},
            body:JSON.stringify(data),
        })
            .then(res => res.json())
            .then(json => console.log('POST GET SALE--------',json))
    // }
}

export const fetchPostOrderSend = (data) => {
    const url= 'http://localhost:3333/order/send'
    fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(json => console.log('POST ORDER SEND------', json))
}