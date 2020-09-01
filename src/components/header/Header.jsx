import React , {useContext} from 'react';
import './Headers.scss'
import { SidebarContext } from '../../context/sideBarContext';


export const Header = () => {
    const {unhide} = useContext(SidebarContext)
	return (
		<div className="header">
            <div className="header-title">Customers</div>
            <div className="add-button" onClick={unhide}>
                Add <span className="plus">+</span>
            </div>
        </div>
	);
};
  