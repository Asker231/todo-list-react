import React from 'react'
import { useSelector } from 'react-redux'
import style from './user.module.css';
import Avatar  from '@mui/material/Avatar';

const UserCard = () => {
    const { email } = useSelector(state => state.auth);
  return (
    <div className={style.cardUser}>
        <div className={style.top}>

         <Avatar src="/broken-image.jpg" />
          <span>akser@mail.com</span>
          
        </div>
    </div>
  )
}

export default UserCard