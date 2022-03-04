import React, { useState } from 'react'
import Cart from '../Card/Cart'
import HeaderCartButton from '../UI/buttons/HeaderCartButton/HeaderCartButton'

import classes from "./header.module.css"

function Header() {
    const [isOpen, setisOpen] = useState(false)

    const toggleCard = () => {
        setisOpen(prev => !prev)
    }

    return (
        <header className={classes.header}>
            <h1>Meal</h1>
            <HeaderCartButton toggle={toggleCard}/>
            {isOpen && <Cart toggle={toggleCard}/>}
        </header>
    )
}

export default Header;
