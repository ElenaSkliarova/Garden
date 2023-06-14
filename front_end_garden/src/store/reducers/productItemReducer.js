

const GET_PRODUCT_ITEM = 'GET_PRODUCT_ITEM'



export const productItemReducer = (state = [], action) => {
    switch(action.type){
        case GET_PRODUCT_ITEM: 
            if(action.payload.status){
                return []
            }
            return action.payload[0]
                

        default:
            return state
    }
}

export const getProductItemAction = (payload) => ({type: GET_PRODUCT_ITEM, payload})
