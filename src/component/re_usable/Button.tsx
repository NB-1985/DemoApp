
// const Button = ({type,bgColor,width,height,textColor,name,hoverBg,hoverText,border,borderColor,margin}:any) => {
//   return (
//     <button type={type} className={` bg-[${bgColor}] w-[${width}] h-[${height}] 
//     text-[${textColor}] hover:bg-${hoverBg} hover:text-${hoverText}
//     border-${border} border-${borderColor} mx-${margin}`} >{name}</button>
//   )
// } 


interface button {
  className?:string;
  name?:string;
  onclick?:any;
}

const Button=({name,className,onclick}:button)=>{
return (
  <button onClick={onclick} className={ `bg-[#5A9C17] w-[160px] h-[45px]  text-white text-[16px] ${className && className}`}>{name}</button>
)
};

export default Button