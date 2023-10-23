import React from 'react'
import Button from './Button'

const IngredientCard = ({title,sale,description,bgi}:any) => {
  return (
    <div>
        

       
        <div
         style={{
            backgroundImage: `url(${bgi})`
          }}
          className="h-[490px] w-[631px]">
          <div className=" h-full flex flex-col justify-center pl-[40px] gap-4">
            <p className="text-[#0AAD0A] text-[16px]">{title}</p>
            <p className="font-[700] text-[34px]">{sale}</p>
            <p className="text-[16px] font-[400]">{description}</p>
          </div>
        </div>
    </div>
  )
}

export default IngredientCard