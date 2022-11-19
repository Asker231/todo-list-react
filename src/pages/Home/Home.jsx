import React from 'react'
import Nav from '../components/navComponent/Nav';
import Section from '../components/sectionComponent/Section';
import style from './home.module.css';

const Home = () => {
  return (
    <div  className={style.home}>
       <Nav/>
       <Section/>
      
    </div>
  )
}

export default Home