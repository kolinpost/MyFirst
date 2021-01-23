import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Menu.module.css';



const Menu = (props) => {
    return <nav className={style.menu}>
        <br></br><br></br>
        <div><NavLink to='/profile' className={style.item}>Profile</NavLink></div>
        <div><NavLink to='/dialogs' className={style.item}>Dialogs</NavLink></div>
        <div><NavLink to='/news' className={style.item}>News</NavLink></div>
        <div><NavLink to='/settings' className={style.item}>Settings</NavLink></div>

        <div><NavLink to='/users' className={style.item}>Users</NavLink></div>
        
    </nav>
}

export default Menu;