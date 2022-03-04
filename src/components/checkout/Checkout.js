import React, { useState } from 'react';
import Input from '../UI/Input';

const Checkout = ({onConform}) => {
    const [form, setForm] = useState({
        name: '',
        postalCode: '',
        city: ''
    })
    
    const onChangeHnadler = (e) => {
       setForm(prev => {
           return {
                ...prev,
                [e.target.name]: e.target.value 
           }
        })     
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const userData = {
            name: form.name,
            postalCode: form.postalCode,
            city: form.city
        }
        onConform(userData)
    }
    return (
        <div>
           <form onSubmit={onSubmitHandler}>
                <Input onChange={onChangeHnadler} labelStyle={{display: 'block'}} name='name' />   
                <Input onChange={onChangeHnadler} labelStyle={{display: 'block'}} name='postalCode' label='postal code' />   
                <Input onChange={onChangeHnadler} labelStyle={{display: 'block'}} name='city' />   
                <button>conform</button>
                <button type='button'>cancel</button>
            </form> 
        </div>
    )
}

export default Checkout;
