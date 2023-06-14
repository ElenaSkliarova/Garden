

const GET_CATEGORY_ITEM = 'GET_CATEGORY_ITEM'
const FILTER_BY_SALE_CATEGORY_PRODUCTS = 'FILTER_BY_SALE_CATEGORY_PRODUCTS'
const SELECT_CATEGORY_PRODUCTS= 'SELECT_CATEGORY_PRODUCTS'
const FILTER_BY_RANGE_CATEGORY_PRODUCTS = 'FILTER_BY_RANGE_CATEGORY_PRODUCTS'


const defaultState = {
    category: {},
    data: []
}

export const categoryItemReducer = (state = defaultState, action) => {
    switch(action.type){
        case GET_CATEGORY_ITEM:
            if(action.payload.status){
                return defaultState
            } 
            const newState = action.payload;
            const newData = newState.data.map(el => 
                ({...el, 
                    showRange: true, 
                    showDiscount: true, 
                    current_price: (el.discont_price) ? el.discont_price : el.price}))
            return {...newState, data: newData}
        
        case FILTER_BY_SALE_CATEGORY_PRODUCTS:
            if(action.payload){
                const dataBySale = state.data.map(el => (el.discont_price) ? el : {...el, showDiscount: false})
                return {...state, data: dataBySale}
            }else{
                const dataNotBySale = state.data.map(el => ({...el, showDiscount: true}))
                return {...state, data: dataNotBySale}
            }                          

        case SELECT_CATEGORY_PRODUCTS:
            const data = [...state.data];
            if(action.payload === 'ascending'){
                const dataByAscending = data.sort((a,b) => a.current_price - b.current_price)
                return {...state, data: dataByAscending}
            }
            if(action.payload === 'descending'){                             
                const dataByDescending = data.sort((a,b) => b.current_price - a.current_price)
                return {...state, data: dataByDescending}
            }
            if(action.payload === 'title'){
                const dataByTitle = data.sort((a,b) => a.title.localeCompare(b.title))
                return {...state, data: dataByTitle}
            }
            if(action.payload === 'default'){
                const dataDefault = data.sort((a,b) => a.id - b.id)
                return {...state, data: dataDefault}
            }
            return state
        
        case FILTER_BY_RANGE_CATEGORY_PRODUCTS:
            const {from, to}  = action.payload
            
            const dataFiteredByRange = state.data.map(el => {
                    return (el.current_price < from || el.current_price > to) ? {...el, showRange: false} : {...el, showRange: true}
            })
            
            // const dataFiteredByPrice = state.data.map(el => {
            //     return (el.current_price < from || el.current_price > to) ? {...el, showRange: false} : {...el, showRange: true}
            // })
            // console.log('dataFiteredByPrice--', dataFiteredByPrice)

            return {...state, data: dataFiteredByRange}                  

        default:
            return state
    }
}

export const getCategoryItemAction = (payload) => ({type: GET_CATEGORY_ITEM, payload})
export const filterBySaleCategoryProductsAction = (payload) => ({type: FILTER_BY_SALE_CATEGORY_PRODUCTS, payload})
export const selectCategoryProductsAction = (payload) => ({type: SELECT_CATEGORY_PRODUCTS, payload})
export const filterByRangeCategoryProductsAction = (payload) => ({type: FILTER_BY_RANGE_CATEGORY_PRODUCTS, payload})
