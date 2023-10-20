import React from 'react'

const Button = ({type,bgColor,width,height,textColor,name,hoverBg,hoverText,border,borderColor,margin}:any) => {
  return (
    <button type={type} className={` bg-[${bgColor}] w-[${width}] h-[${height}] text-[${textColor}] hover:bg-${hoverBg}  hover:text-${hoverText}
    border-${border} border-${borderColor} mx-${margin}`} >{name}</button>
  )
} 

export default Button