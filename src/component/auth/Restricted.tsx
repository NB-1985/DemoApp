import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Restricted = ({component}:any) => {
const navigate=useNavigate();



useEffect(()=>{
    let token=localStorage.getItem("token");
    if(token){
        navigate("/")
    }
},[])
  return (
    <div>
        {component}
        </div>

  )
}

export default Restricted