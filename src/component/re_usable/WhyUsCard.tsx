import React from 'react'

const WhyUs = ({title,description,image}:any) => {
  return (
    <div>

<div className=" flex gap-3 ">
            <img src={image} alt="delivery" />
            <div className="flex flex-col font-[700] text-[20px] leading-[32px]">
              {title}
              <span className="text-[14px] font-[500] text-[#A0A0A0]">
                {description}
              </span>
            </div>
          </div>
    </div>
  )
}

export default WhyUs