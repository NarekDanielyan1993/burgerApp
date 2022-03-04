import React, { useReducer } from 'react';
import CardContext from './CardContext';


const initialState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            let updateItems = [...state.items];
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            const isExistedItem = state.items.findIndex(item => item.id === action.item.id)
            if (isExistedItem !== -1) {
                const updatedItem = {
                    ...updateItems[isExistedItem],
                    amount: action.item.amount + updateItems[isExistedItem].amount                
                }
                updateItems[isExistedItem] = updatedItem;
            } else {
                updateItems = [
                    ...updateItems,
                    action.item
                ]
            }
        return {
            items: updateItems,
            totalAmount: updatedTotalAmount
        };
        case "REMOVE":
            let updatedItems = [...state.items];
            let updatedItemIndex = state.items.findIndex(item => item.id === action.id)
            let updatedItem = updatedItems[updatedItemIndex];
            updatedItem = {
                ...updatedItem,
                amount: updatedItem.amount - 1            
            }
            const totalAmount = state.totalAmount - updatedItem.price;
            if (updatedItem.amount === 0) {
                updatedItems = state.items.filter(item => item.id !== action.id)
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            }
        return {
                items: updatedItems,
                totalAmount: totalAmount
            }
        // eslint-disable-next-line no-unused-expressions
        default: initialState;
    }
}

const CardProvider = (props) => {

    const [state, dispatchCartAction] = useReducer(cartReducer, initialState);

    const addCartItem = (item) => {
        dispatchCartAction({type: "ADD", item})
    }

    const removeCardItem = (id) => {
        dispatchCartAction({type: "REMOVE", id})
    }

    const context = {
        mealsList: state.items,
        totalAmount: state.totalAmount,
        addItem: addCartItem,
        removeItem: removeCardItem 
    }

    return <CardContext.Provider value={context}>
        {props.children}
    </CardContext.Provider>
}

export default CardProvider;