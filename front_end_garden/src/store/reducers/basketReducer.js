

const defaultState = JSON.parse(localStorage.getItem('basket')) ?? []


const ADD_TO_CART = 'ADD_TO_CART';
const REDUCE_PRODUCT = 'REMOVE_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const CLEAN_BASKET ='CLEAN_BASKET';


export const basketReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            // console.log("BASKET.state ------", state)
            const {id} = action.payload
            const isProduct = state.find(el => el.id === id)
            if(isProduct){
                return state.map(el => (el.id === id) ? {...el, count: el.count + 1} : el)
            }
            return [...state, {...action.payload, count: 1}]
        
        case REDUCE_PRODUCT:
            const targetProduct = state.find(el => el.id === action.payload)
            if(targetProduct.count === 1){
                return state.filter(el => el.id !== action.payload)
            } else {
                targetProduct.count--
                return [...state]
            }
        
        case ADD_PRODUCT:
            return state.map(el => {
                if(el.id === action.payload){
                    return {...el, count: el.count +1}
                }
                return el
            })

        case DELETE_PRODUCT:
            return state.filter(el => el.id !== action.payload)

        case CLEAN_BASKET:
            return []        

        default:
            return state
    }
}

export const addToCartAction = (payload) => ({type: ADD_TO_CART, payload});
export const reduceProductAction = (payload) => ({type: REDUCE_PRODUCT, payload});
export const addProductAction = (payload) => ({type: ADD_PRODUCT, payload});
export const deleteProductAction = (payload) => ({type: DELETE_PRODUCT, payload});
export const cleanBasketAction = () => ({type: CLEAN_BASKET})
