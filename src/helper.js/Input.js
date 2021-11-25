import React from 'react'
const Input = (props) => {
    const{label, name, type,handler, ...rest} = props;

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name}
            placeholder={label.toLocaleLower}
            className="form-control"
            onChange={handler}
            autoComplete='off'
            {...rest} />
            
        </div>
    )
}

export default Input
