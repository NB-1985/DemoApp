import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({component}:any) => {
const navigate=useNavigate();

useEffect(()=>{
    let login=localStorage.getItem("token");
    if(!login){
        navigate("/signup")
    }
},[])
  return (
    <div>
        {component}
        </div>

  )
}

export default ProtectedRoute