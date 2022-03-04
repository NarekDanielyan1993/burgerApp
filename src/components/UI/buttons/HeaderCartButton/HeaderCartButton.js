import React, { useContext } from 'react';
import CardContext from '../../../../store/card/CardContext';
import CartIcon from '../../../Card/CartIcon';
import classes from "./headerCartButton.module.css";

const HeaderCartButton = ({ toggle }) => {

    const cardCtx = useContext(CardContext);
    console.log(typeof cardCtx.mealsList);
    const numberOfCardItems = cardCtx.mealsList.reduce((number, item) => {
        return number + item.amount;
    }, 0)
    return <button onClick={toggle} className={classes.button}> 
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCardItems}</span>
    </button>
}

export default HeaderCartButton;
