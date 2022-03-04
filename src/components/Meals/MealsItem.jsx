import React, { useContext } from 'react';
import classes from './MealsItem.module.css';
import MealsItemForm from './MealsItemForm';
import CardContext from "../../store/card/CardContext";

const MealsItem = ({ name, id, description, price }) => {

    const cartCtx = useContext(CardContext)
    const onAddItemToCart = (amount) => {
        const totalAmount = +amount;
        cartCtx.addItem({
            name,
            price,
            id,
            amount: totalAmount
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{price.toFixed(2)}</div>
            </div>
            <div>
                <MealsItemForm addItemToCart={onAddItemToCart} />
            </div>
        </li>
    );
};

export default MealsItem;
