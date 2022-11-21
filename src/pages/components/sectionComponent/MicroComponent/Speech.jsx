import React, { useState } from 'react'
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';



const Speech = ({funcStart}) => {





  return <div><MicOutlinedIcon onClick={
   funcStart()
  } style={{cursor:'pointer',fontSize:'35px',backgroundColor:"#1976d2",borderRadius:'20px',padding:'5px',color:'#fff'}}/></div>
}

export default Speech