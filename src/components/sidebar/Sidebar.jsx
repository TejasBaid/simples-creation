import React,{useState,useReducer,useContext} from 'react'
import './Sidebar.scss'
import { FiCrosshair, FiX } from 'react-icons/fi'
import { FormInput , SmallFormInput } from '../form-input/FormInput'
import { DataContext } from '../../context/dataContext'
import { SidebarContextProvider, SidebarContext } from '../../context/sideBarContext'
import { FormContext } from '../../context/formContext'
import uuid from 'react-uuid';

export const Sidebar = () => {
    

    const {fullSizeInputs,smallSizeInputs,handleChange,userInput,setUserInput,saveUser} = useContext(FormContext)
    const {hide,hidden,setHidden} = useContext(SidebarContext)
    
    return (
        <div className={hidden} >
            <div className="sidebar-header">
                <div className="sidebar-title">Add Customer</div>
                <FiX className='close' onClick={hide} />
            </div>
            <div className="form">
                {fullSizeInputs.map((input) => {
                    return <FormInput  label={input.label} placeholder={input.placeholder} value={input.value} method={handleChange} name={input.name} />
                })}
                <div className="small-inputs">
                {smallSizeInputs.map((input) => {
                    return <SmallFormInput label={input.label} placeholder={input.placeholder} value={input.value} method={handleChange} name={input.name} />
                })}
                </div>
            </div>
            <div className="save" onClick={saveUser}>
                Save
            </div>
        </div>
    )
}
