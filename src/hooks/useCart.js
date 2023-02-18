import { useReducer } from 'react';
import { cartData } from '../Mock/cartData';

const initialState = {
  count: 0,
  products: cartData,
};

const ACTIONS = {
  ADD_TO_CART: 'addToCart',
  REMOVE_FROM_CART: 'removeFromCart',
  CLEAR_CART: 'clearCart'
};

const Reduce = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return { ...state, products: [...state.products, action.payload], count: state.count + 1 };
    case ACTIONS.REMOVE_FROM_CART:
      return { ...state, products: state.products.filter((product) => product.id !== action.payload), count: state.count - 1 };
    case ACTIONS.CLEAR_CART:
      return {
        count: 0,
        products: [],
      };
    default:
      return state;
  }
};

const useCart = () => {
    const newId = Math.floor(Math.random()*1000)
    const [state, dispatch] = useReducer(Reduce, initialState);

    const addToCart = (product) => dispatch({ type: ACTIONS.ADD_TO_CART, payload: {...product,id:newId} });
    const removeFromCart = (productId) => dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: productId });
    const clearCart = () => dispatch({type:ACTIONS.CLEAR_CART})

    return { state, addToCart, removeFromCart, clearCart };
};

export default useCart;