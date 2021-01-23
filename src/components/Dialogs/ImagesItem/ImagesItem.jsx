import React from 'react';
import style from './ImagesItem.module.css';

const ImagesItem =(props)=>{
    return(
    <div className={style.item}>{props.img}</div>
    )
}

export default ImagesItem;