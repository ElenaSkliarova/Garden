

const GET_CATEGORIES = 'GET_CATEGORIES'


export const categoriesReducer = (state = [], action) => {
    switch(action.type){
        case GET_CATEGORIES:
            return action.payload;
        default:
            return state
    }
}



export const getCategoriesAction = (payload) => ({type: GET_CATEGORIES, payload})