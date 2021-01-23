import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';



const Header = (props) => {
    return <nav className={style.board}>
        <div className={style.loginBlock}>
            {props.isAuth ? props.login: <NavLink to={'/login'}>login</NavLink>}
        </div>
       </nav>
    }

export default Header;