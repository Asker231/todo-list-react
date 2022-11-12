import React, { useState } from 'react'
import style from './nav.module.css';
import NavItems from './navItems/NavItems';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import  TextField  from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import Fab  from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';

const Nav = () => {
  const[isadd,setAdd] = useState(false);
  return (
    <div className={style.nav}>
        <div className={style.header}>
        <h1 style={{color:'#fff'}}>
            ToDo
        </h1>
     <AccountCircleOutlinedIcon id={style.account}/>
        </div>

 
        <div className={style.addFolder}>
          {isadd?<TextField id={style.tf} label="Введите название..." variant="standard"  />:<span style={{color:'white',fontSize:'15px'}}>Добавить категорию</span>}
          <Fab color="primary" aria-label="add">
           {isadd?<CheckIcon onClick={()=>setAdd(!isadd)}/>:<AddIcon onClick={()=>setAdd(!isadd)}/>}
          </Fab>
        </div>
        <NavItems/>
    </div>
  )
}

export default Nav