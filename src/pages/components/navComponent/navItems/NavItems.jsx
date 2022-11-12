import React from 'react'
import { useSelector } from 'react-redux';

import style from './navitems.module.css';

const NavItems = () => {

  const sel = useSelector((state)=>state.nav.arr);

  return (
    <div className={style.navitems}>

        <a href="#">Книги</a>
        <a href="#">Домашние задачи</a>
        <a href="#">Школа</a>
        <a href="#">Разное</a>
        <a href="#">Воспоминания</a>
        {
            sel.map((el)=>{
              return <a href='#'>{el.text}</a>
            })
        }

    </div>
  )
}

export default NavItems