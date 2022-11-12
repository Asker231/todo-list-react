import React from 'react'
import style from './navitems.module.css';

const NavItems = () => {
  return (
    <div className={style.navitems}>
        <a href="#">Книги</a>
        <a href="#">Домашние задачи</a>
        <a href="#">Школа</a>
        <a href="#">Разное</a>
        <a href="#">Воспоминания</a>
    </div>
  )
}

export default NavItems