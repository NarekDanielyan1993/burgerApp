import React, { useEffect, useState } from 'react';
import fetchApi from '../../utils/fetchApi';

import classes from './availableMeals.module.css';
import MealsItem from './MealsItem';

const AvailableMeals = () => {
    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setIsError] = useState(null)

    useEffect(() => {
        const getMeals = async () => {

            setIsLoading(true)
            setIsError(null)
            try {
                const { data } = await fetchApi({ method: 'get', url: 'meals.json' }) 
                const updatedMeals = []
                for (const key in data) {
                    const obj = {
                        id: key, 
                        ...data[key]
                    }
                    updatedMeals.push(obj)
                }
                setMeals(updatedMeals)
            } catch (error) {
                console.log(error);
                setIsError(error.message)                
            } finally {
                setIsLoading(false)
            }
        }
        getMeals()
    }, [])

    if (isLoading) {
        return (
            <section style={{textAlign: 'center', color: 'white', fontSize: '40px'}}>
            <p>Loading...</p>
            </section>
        )    
    }

    if (error) {
        return (
            <section style={{ textAlign: 'center', color: 'red', fontSize: '40px' }}>
                <p>{error}</p>
            </section>
        )
    }

    const meals_list = meals.map((item) => (
        <MealsItem
            key={item.id} 
            name={item.name} 
            price={item.price} 
            description={item.description} 
            id={item.id}    
        />
    ));
    return (
        <section className={classes.meals}>
            <div className={classes.card}>
                <ul>{meals_list}</ul>
            </div>
        </section>
    );
};

export default AvailableMeals;
