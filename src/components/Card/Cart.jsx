import React, { useContext, useState } from 'react'
import CardContext from '../../store/card/CardContext'
import Checkout from '../checkout/Checkout'
import Modal from '../UI/modal/Modal'
import fetchApi from "../../utils/fetchApi"

import classes from "./cart.module.css"
import CartItem from './CartItems'

const Cart = (props) => {

    const [isCheckoutOpened, setIsCheckoutOpened] = useState(false)
    const {removeItem, addItem, totalAmount, mealsList} = useContext(CardContext)
    const cartItemRemoveHandler = (item) => {
        removeItem(item)
    }

    const cartItemAddHandler = (item) => {
        const updatedItem = {
            ...item,
            amount: 1
        }
        addItem(updatedItem)

    }

    const onOrderHandler = () => {
        setIsCheckoutOpened(prev => !prev)
    }

    const onSendData = (userData) => {
        const data = {
            user: userData,
            orders: mealsList
        }
        try {
            fetchApi({method: 'post', url: 'orders.json', data})
        } catch (error) {

        } finally {
            props.toggle()
        }
    }

    return (
        <Modal click={props.toggle}>
            <ul className={classes["cart-items"]}>
                {mealsList.map((item) => {
                    return <CartItem
                        key={item.id}
                        onAdd={(e) => cartItemAddHandler(item)} 
                        onRemove={(e) => cartItemRemoveHandler(item.id)} 
                        price={item.price} 
                        name={item.name} 
                        amount={item.amount} 
                        />
                })}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{`${totalAmount.toFixed(2)}$`}</span>
            </div>
            {isCheckoutOpened && mealsList.length > 0 && <Checkout onConform={onSendData} />}
            <div className={classes.actions}>
                {mealsList.length > 0 && <button onClick={onOrderHandler} className={classes.button}>order</button>}
                <button onClick={props.toggle} className={classes["button--alt"]}>close</button>
            </div>
        </Modal>
    )
}

export default Cart;
