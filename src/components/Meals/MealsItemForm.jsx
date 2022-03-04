import React, { useState } from 'react';
import Input from '../UI/Input';

import classes from './mealsItemForm.module.css';

const MealsItemForm = ({ addItemToCart }) => {
    const [input, setInput] = useState('')

const onChangeHandler = (e) => {
    setInput(e.target.value)
}

const submitHandler = (e) => {
    e.preventDefault()
    addItemToCart(input)
}

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                value={input}
                onChange={onChangeHandler}
                label="amount: "
                min="1"
                max="5"
                type='number'
                id='amount'
            />
            <button className={classes.button}>+ Add</button>
        </form>
    );
};

export default MealsItemForm;
