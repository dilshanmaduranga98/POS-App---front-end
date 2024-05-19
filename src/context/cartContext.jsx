import { createContext, useReducer } from "react";

const initState = {items: []};

export const CartContext = createContext(initState);

const cartReducer = (state, action) => {

    switch(action.type) {
        case 'ADD_ITEM_TO_CART':
            console.log(action.payload);
            return {
                ...state,
                items: updateCart(state.items, action.payload),
              };
        case 'DELETE_ITEM':
            console.log("called")
            return {
                ...state,
                items: removeItemFromCart(state.items, action.payload),
            };
        default:
            return initState;
    }

}



const updateCart = (cart, newItem) => {
    const matchingItemIndex = cart.findIndex(item => item.id === newItem.id);
  
    if (matchingItemIndex !== -1) {
      // Item already exists, update its quantity
      const updatedCart = [...cart];
      updatedCart[matchingItemIndex].qut += 1;
      return updatedCart;
    } else {
      // Item doesn't exist, add it to the cart
      return [...cart, newItem];
    }
};

const removeItemFromCart = (cart, itemId) => {
    return cart.filter(item => item.id !== itemId);
};


const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initState);

    return (
        <CartContext.Provider value={{cart: state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
