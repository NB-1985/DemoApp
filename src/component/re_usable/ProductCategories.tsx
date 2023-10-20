import React from 'react'

const ProductCategories = ({title,image}:any) => {
  return (
    <div>
        <div className="h-[122px] w-[190px]  flex justify-center items-center flex-col gap-4 border-2 border-slate-200 shadow-2xl">
            <img
              src={image}
              alt="products"
              className="h-[45px]"
            />
            <p>{title}</p>
          </div>
    </div>
  )
}

export default ProductCategories