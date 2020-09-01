import React from 'react'
import './FormInput.scss'



export const FormInput = ({label,placeholder,method,value,name}) => {
    return (
        <div className="form-input-container">
            <div className="form-input-label">{label}</div>
            <input className='form-input full-size' name={name} value={value} onChange={method}  type="text" placeholder={placeholder} />
        </div>
    )
}
export const SmallFormInput = ({label,placeholder,method,value,name}) => {
    return (
        <div className="form-input-container">
            <div className="form-input-label">{label}</div>
            <input className='form-input half-size' name={name} value={value} onChange={method}  type="text" placeholder={placeholder} />
        </div>
    )
}