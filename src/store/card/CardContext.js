import React from 'react';

const CardContext = React.createContext({
        mealsList: [],
        totalAmout: 0,
        addItem: () => {},
        removeItem: (id) => {}
    })

export default CardContext;
