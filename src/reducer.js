import * as actionType from './action';

const initialState = {
    ingredients:{
        cheese: 0,
      meat: 0,
      salad: 0,
      bacon: 0,
    },
    totalPrice:4
}


const reducer = (state=initialState, action) =>
{
    switch(action.type){
        case actionType.ADD_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredient[action.ingredientName] + 1
                }
            }
            break;
        case actionType.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName] - 1
                }
            }    
    }
}

export default reducer;