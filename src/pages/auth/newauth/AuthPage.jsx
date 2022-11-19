import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Form from '../componentAuth/Form'
import style from './auth.module.css';


const AuthPage = () => {

  return (
    <div className={style.auth}>

        <h1>Welcome In MyDay</h1>
       <Form title='Pегистрация' text='pегистрация'/>
       <Link style={{textDecoration:'none',color:'#fff',fontWeight:'bold'}} to='/loginPage'>LoginPage</Link>
       

    </div>
  )
}

export default AuthPage