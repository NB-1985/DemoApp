import React from 'react'

interface itemCardComponent {
  title?:string;
  image?:string;
}

const ProductCategories = ({title,image}:itemCardComponent) => {
  return (
    <div className='pb-9 px-4 sm:px-0' >
        <div className="h-[122px] sm:w-[190px]  flex justify-center items-center flex-col gap-4 border-2 border-slate-200">
            <img
              src={image}
              alt="products"
              className="h-[45px]"
            />
            <p className='text-center'>{title}</p>
          </div>
    </div>
  )
}

export default ProductCategories