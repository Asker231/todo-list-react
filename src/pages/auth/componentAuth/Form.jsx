import React from 'react'
import  TextField  from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import style from './form.module.css';
import { useState } from 'react';
import { AuthUser } from '../../../redux/authSlice';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';


const Form = ({title,text}) => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const disp = useDispatch();
  //const [email,setEmail] = useState();
  const userData ={
    email,
    password,
    id:v4()
  }
  const HandleAuth =()=>{
     disp(AuthUser(userData))
  }
  return (
    <div className={style.form}>
        <h2>{title}</h2>
          <TextField 
           onChange={(e)=>setEmail(e.target.value)}
           value={email}
           type="email"
           id="standard-basic"
           label="Email"
           variant="standard" 
            />
          <TextField
             onChange={(e)=>setPassword(e.target.value)}
             value={password}
             id="standard-basic"
             type="password"
             label="Password"
             variant="standard" />
          <Button onClick={()=>HandleAuth()} variant="contained">{text}</Button>
    </div>
  )
}

export default Form