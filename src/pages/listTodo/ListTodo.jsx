import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './listtodo.module.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { removeItem } from '../../redux/todoSlice';
import  Alert  from '@mui/material/Alert';

const ListTodo = () => {
    const sel = useSelector(state=>state.todo.arr);
    const[info,setInfo] = useState(false);
    const disp = useDispatch();
  return (
    <div className={style.list}>
         {
            sel.map((el)=>{
              return <div className={style.todo}>               
                <div className={style.texts}>
                    <CheckOutlinedIcon id={style.check}/>
                    <span  >{el.text}</span> 
                </div>
                <div className={style.icons}>
                    <InfoOutlinedIcon onClick={()=>setInfo(!info)} id={style.inform}/>
                    {info?<Alert severity="info">{new Date().toTimeString()}</Alert>:null}
                    <DeleteOutlineOutlinedIcon  onClick={()=>disp(removeItem(el.id))} id={style.delete}/> 
                </div>
               
                </div>
            })
       }
    </div>
  )
}

export default ListTodo