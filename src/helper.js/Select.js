
import React from 'react'

const Select = (props) => {
    const{options=[], label, name, handler} = props;
    return (
        <div className='form-group'>
            <div>
            <label htmlFor={name} name={name}>{label}</label>
            </div>
            <select className='form-control' name={name} onChange={handler}>
            <option value="">select</option>
            {
                options.map((item, index) =>{
                    <option key={index} value={item}>{item}</option>
                })
            }

            </select>
            
            
        </div>
    )
}

export default Select














































































