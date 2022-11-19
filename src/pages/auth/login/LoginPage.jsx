import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../componentAuth/Form';
import style from './login.module.css';

const LoginPage = () => {
  return (
    <div className={style.login}> 
     <h1>Welcome In MyDay</h1>
      <Form text='Login' title='LoginPage'/>
      <Link style={{textDecoration:'none',color:'#fff',fontWeight:'bold'}} to='/authPage'>AuthPage</Link>
    </div>
  )
}

export default LoginPage