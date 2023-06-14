
const GET_PRODUCTS = 'GET_PRODUCTS'
const FILTER_BY_SALE_ALL_PRODUCTS = 'FILTER_BY_SALE_ALL_PRODUCTS'
const SELECT_ALL_PRODUCTS= 'SELECT_ALL_PRODUCTS'
const FILTER_BY_RANGE_ALL_PRODUCTS = 'FILTER_BY_RANGE_ALL_PRODUCTS'


export const productsReducer = (state = [], action) => {
    switch(action.type){
        case GET_PRODUCTS:
            const newState = action.payload.map(el => 
                ({...el, 
                    showRange: true, 
                    showDiscount: true, 
                    current_price: (el.discont_price) ? el.discont_price : el.price})) 
                    // console.log('newState---', newState)
            return newState           
        
         
        case FILTER_BY_SALE_ALL_PRODUCTS:
            if(action.payload){
                return state.map(el => (el.discont_price) ? el : {...el, showDiscount: false})
                
            }else{
                return state.map(el => ({...el, showDiscount: true}))
                
            }                          

        case SELECT_ALL_PRODUCTS:
            const data = [...state]
            if(action.payload === 'ascending'){
                const dataByAscending = data.sort((a,b) => a.current_price - b.current_price)  
                return   dataByAscending           
            }
            if(action.payload === 'descending'){                             
                const dataByDescending = data.sort((a,b) => b.current_price - a.current_price)
                return dataByDescending             
            }
            if(action.payload === 'az'){
                const dataByTitle = data.sort((a,b) => a.title.localeCompare(b.title))
                return dataByTitle                
            }
            if(action.payload === 'za'){
                const dataByTitle = data.sort((a,b) => b.title.localeCompare(a.title))
                return dataByTitle                
            }
            if(action.payload === 'default'){
                const dataByDefault = data.sort((a,b) => a.id - b.id)  
                return dataByDefault              
            }
            return state
    
        
        case FILTER_BY_RANGE_ALL_PRODUCTS:
            const {from, to}  = action.payload
            
            return state.map(el => 
                    (el.current_price < from || el.current_price > to) 
                    ? {...el, showRange: false} 
                    : {...el, showRange: true}
            )      
                    
        default:
            return state
    }
}

export const getProductsAction = (payload) => ({type: GET_PRODUCTS, payload})
export const filterBySaleAllProductsAction = (payload) => ({type: FILTER_BY_SALE_ALL_PRODUCTS, payload})
export const selectAllProductsAction = (payload) => ({type: SELECT_ALL_PRODUCTS, payload})
export const filterByRangeAllProductsAction = (payload) => ({type: FILTER_BY_RANGE_ALL_PRODUCTS, payload})
