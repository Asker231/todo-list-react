import React, { useState } from 'react'
import style from './nav.module.css';
import NavItems from './navItems/NavItems';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import  TextField  from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import Fab  from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';
import { addNav } from '../../../redux/navSlice';
import { v4 } from 'uuid';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
const Nav = () => {
  const[isadd,setAdd] = useState(false);
  const [text,setText] = useState();

  const disp = useDispatch();
  const handleNav=(e)=>{
    setText(e.target.value);
    setText(null);
  }

  const dataNav = {
    id:v4(),
    text
  }
  return (
    <div className={style.nav}>
       <KeyboardArrowLeftOutlinedIcon id={style.key}/>
        <div className={style.header}>
       
        <h2 style={{color:'#fff'}}>
            My<mark>Day</mark>
        </h2>
     <AccountCircleOutlinedIcon id={style.account}/>
        </div>

 
        <div className={style.addFolder}>
          {isadd?<TextField onChange={()=>handleNav} value={text} id={style.tf} label="Введите название..." variant="standard"  />:<span style={{color:'white',fontSize:'15px'}}>Добавить категорию</span>}
          <Fab onClick={()=>setAdd(!isadd)} color="primary" aria-label="add">
           {isadd?<CheckIcon onClick={()=>disp(addNav({text}))} />:<AddIcon/>}
          </Fab>
        </div>

        <NavItems/>
    </div>
  )
}

export default Nav