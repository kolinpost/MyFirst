import React from 'react';
import s from './Post2.module.css';

const Post2 = (props) => {
    return (
        <div className={s.item}>
            <tr></tr><tb></tb>
            <img src='https://images.unsplash.com/photo-1604691335022-5d654b4fcb78?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ' />
            {props.name} {props.age} {props.message}<br></br><span>like: {props.like}</span>
        </div>
    )
}

export default Post2;

