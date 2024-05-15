import { createContext, useReducer } from "react";

const initState = {items: []};

export const CartContext = createContext(initState);

const cartReducer = (state, action) => {

    switch(action.type) {
        case 'ADD_ITEM_TO_CART':
            let newItems = [...state.items];
            
            
             newItems.push(action.payload);
            state.items = newItems;
            localStorage.setItem("Items", JSON.stringify(newItems));
            return {
                items: newItems
            };
        default:
            return initState;
    }

}

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initState);

    return (
        <CartContext.Provider value={{cart: state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;




