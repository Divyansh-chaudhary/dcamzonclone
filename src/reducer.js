export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export default function reducer(state, action) {
  //console.log(action);
  switch (action.type) {
    case "ADD-TO-CART":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      }

    case "REMOVE-PRODUCT": {
      const index = state.basket.findIndex((item) => item.id === action.id);
      const newBasket = state.basket;
      newBasket.splice(index, 1);
      return {
        ...state,
        basket: newBasket,
      }
    }

     case "SET-USER":
      return {
        ...state,
        user: action.user,
      }
    
    default:
      return state;
  }
}
