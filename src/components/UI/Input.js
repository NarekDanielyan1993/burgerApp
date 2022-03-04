import React, { Fragment } from 'react';

const Input = ({ label, id, labelStyle={}, inputStyle={}, name, type='text', value, onChange, ...props }) => {
    return (
        <Fragment>
            <label style={{color: 'black', ...labelStyle}} htmlFor={id}>{ label ?? name }</label>
            <input 
                style={{inputStyle}}
                name={name}
                type={type} 
                className={inputStyle} 
                value={value} 
                id={id} 
                onChange={onChange} 
                {...props} 
            />
        </Fragment>
    );
};

export default Input;
