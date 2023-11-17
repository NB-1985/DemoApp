// const Button = ({type,bgColor,width,height,textColor,name,hoverBg,hoverText,border,borderColor,margin}:any) => {
//   return (
//     <button type={type} className={` bg-[${bgColor}] w-[${width}] h-[${height}]
//     text-[${textColor}] hover:bg-${hoverBg} hover:text-${hoverText}
//     border-${border} border-${borderColor} mx-${margin}`} >{name}</button>
//   )
// }

interface button {
  className?: string;
  name?: string;
  onClick?: any;
}

const Button = ({ name, className, onClick }: button) => {
  return (
    <button
      onClick={onClick}
      className={`${
        className && className
      } bg-[#5A9C17] w-[160px] h-[45px]  text-white text-[16px] `}
    >
      {name}
    </button>
  );
};

export default Button;
