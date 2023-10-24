import React from "react";
import Button from "../../component/re_usable/Button";
import ItemCard from "../../component/re_usable/ItemCard";

const ProductDetail = () => {


  return (
    <div>
      <div className="pt-[40px]">

        {/* product container  */}
        <div className="w-[90%] mx-auto xl:h-[572px] flex  flex-col xl:flex-row">

          {/* left side  */}
          <div className=" flex justify-center  xl:pr-[142px]">
            <div className="flex flex-col gap-4 ">
              <p className=" w-[80px]">
                <img src="./img/Rectangle 5.svg" alt="" className="border-2" />
              </p>
              <p className=" ">
                <img src="./img/Rectangle 6.svg" alt="" className="border-2" />
              </p>
            </div>
            <div>
              <p className=" flex lg:w-[520px]  xl:h-[392px] ">
                <img src="./img/Rectangle 4.png" alt="" className="border-2" />
              </p>
            </div>
          </div>

          {/* right side  */}
          <div className=" flex justify-center pt-[24px] xl:pt-0">
          <div className="xl:w-[468px]">
            <p className="text-[24px] font-[400] leading-[30.24px] pb-[16px]">
              Fresho Apple - Red Delicious, Regular, 4pcs (Approx. 530g - 640g)
            </p>
            <p className="pb-[10px]">
              <span className="font-[700] text-[16px]">$4,164.94 </span>
              <span className="font-[500]">
                {" "}
                You Save: 20%(Inclusive of all taxes)
              </span>
            </p>
            <p className="text-[#5A9C17] pb-[8px]">In Stock</p>
            <p className="font-[500] text-[14px] pb-[8px]">
              Inaugural Offer Free Shipping
            </p>
            <div className="flex gap-3 pb-[25.53px]">
              <img src="./img/Vector (1).svg" alt="" />
              <img src="./img/Group 6.svg" alt="" />
            </div>

            <div className="flex items-center gap-3 pb-[24px]">
              <Button name="Add to Cart" />
              <span>
                <img src="./img/fav.svg" alt="" />
              </span>
            </div>
            <p className="flex gap-4 pb-[15px]">
              <img src="./img/Delivery.svg" alt="" />
              <span className="font-[700]"> Delivery</span>
            </p>

            <div className="p-[16px] bg-[#F1F1F1] w-[230px] ">
              <div className="flex gap-2 justify-between">
                <p className="flex gap-2">
                  <img src="./img/Location.svg" alt="" />
                  <span>400020</span>
                </p>
                <button className="text-[#5A9C17]">Check</button>
              </div>
            </div>
            <p className="text-[12px] pt-[8px] font-[500] pb-[24px]">
              Check for estimated delivery date
            </p>
            <p className="pb-[8px] font-[700] text-[14px]">Offers</p>

            <p className="flex pb-[8px]">
              <img src="./img/Group 934.svg" alt="" /> Cashback T&C Apply
            </p>
            <p className="flex">
              <img src="./img/Group 934.svg" alt="" /> AU Bank - 10% Cashback*
              Up to Rs. 500/- T&C Apply
            </p>
          </div>
          </div>
        </div>
        <p className="border-b-2 w-[90%] mx-auto pt-[57px]"></p>
      </div>




      {/* about product part  */}

      <div className="pt-[60px]">
        <div className="mx-auto lg:flex  w-[90%] ">
          {/* left side  */}

          <div className="lg:pr-[119px]">
          <div className="xl:w-[632px] ">
            <div >
              <p className="font-[700] text-[24px] pb-[16px]">
                About the Product
              </p>
              <ul className="list-disc flex flex-col gap-3 text-[14px] font-[500]">
                <li>
                  The bright red coloured and heart shaped Red Delicious apples
                  are crunchy, juicy and slightly sweet.
                </li>
                <li>
                  Red Delicious Apples are a natural source of fibre and are fat
                  free. They contain and polynutrients.
                </li>
                <li>Do not forget to check our delicious fruit recipe</li>
              </ul>
            </div>

            <div className="pt-[24px]">
              <p className="font-[700] text-[24px] pb-[16px]">Benefits</p>
              <ul className="list-disc flex flex-col gap-3 text-[14px] font-[500]">
                <li>
                  Apples are one of the healthiest fruits. Rich in vitamin C and
                  dietary and immune system healthy.
                </li>
                <li>
                  Protects from Alzheimers, type 2 diabetes and cancer. It is a
                  natural teeth whitener and prevent bad breath.
                </li>
                <li>
                  Eating apple peel lowers the risk of obesity. Apple mask is an
                  excellent cure for wrinkles.
                </li>
              </ul>
            </div>
          </div>
          </div>

          {/* right side  */}

          <div className=" pt-[30px] lg:pt-0">
            <div className=" lg:w-[519px] ">
              <div>
                <p className="pb-[24px] font-[700] text-[24px]">Product Information</p>
                <div className="flex flex-col gap-2">
                  <p> <span className="font-[700]">AN Code:</span>3964454</p>
                  <p><span className="font-[700]">Country Origin:</span>INDIA</p>
                </div>

                <p className="leading-8 pt-[16px]">
                 <span className="font-[700]">Manufacturer Details: </span> <br />
                   Epic Grocery Ltd. <br />
                  4590 Lang Avenue, Salt Lake City, Utah, United States, 84111. <br />
                  <span className="font-[700]">Customer Care No.</span> 1-800-208-2400
                </p>

                <p className="leading-8 pt-[16px]">
                 <span className="font-[700]"> Disclaimer</span> <br />
                   Every effort is made to maintain the accuracy of
                  all information. However, actual product packaging and
                  materials may contain more and/or different information. It is
                  recommended not to solely rely on the information presented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="border-b-2 w-[90%] mx-auto pt-[60px]"></div>



{/* dont forget to add  */}

<div className="pt-[60px]">
 <div className="mx-auto w-[90%]">
 <div className="font-[700] text-[24px] pb-[24px] text-center xl:text-start">
  Dont Forget To Add
</div>
<div className="flex xl:justify-between flex-wrap xl:flex-nowrap justify-center gap-4 xl:gap-0">
  <ItemCard itemImage="./img/image 23.svg" title="Neem" description="Neem Powder" price="$1.59"/>
  <ItemCard itemImage="./img/image 23.svg" title="Neem" description="Neem Powder" price="$1.59"/>
  <ItemCard itemImage="./img/image 23.svg" title="Neem" description="Neem Powder" price="$1.59"/>
  <ItemCard itemImage="./img/image 23.svg" title="Neem" description="Neem Powder" price="$1.59"/>
  <ItemCard itemImage="./img/image 23.svg" title="Neem" description="Neem Powder" price="$1.59"/>
  </div>
  </div>
  <div className="border-b-2 w-[90%] mx-auto pt-[60px] " ></div>
 </div>



{/* product rating */}


<div className="pt-[60px]">

  <div className="mx-auto w-[90%] h-[383px] flex flex-col justify-between">

    {/* top part  */}
<div className="flex flex-col justify-between h-full">
<div className="flex justify-between items-center">
  <p className="sm:font-[700] font-[500] text-[20px]">Product Rating</p>
  <Button name="Write a Review" className="w-20 sm:w-[160px] rounded " />
</div>
 
<div>
<p className="sm:text-[60px] font-[500] text-[30px] sm:font-[700]">4.0/5</p>
<p><img src="./img/Group 848.svg" alt="" /></p>
</div>


<p className="sm:font-[700] font-[500] text-[20px]">
  All Review (4)
</p>
</div>
<div className="border-b-2"></div>

{/* bottom part  */}
<div className="pt-[29px] ">

<div className="flex justify-between flex-col gap-3 " >
  <div className="flex justify-between ">
    <p className="font-[700] text-[#5A9C17]">Cameron Williamson</p>
    <p className="text-[#9A9A9A] text-[14px]">24 October 2023</p>
  </div>

  <p className="font-[700]">
  Osk, Totem Credence
  </p>

  <p className="font-[500] text-[14px]">
  Highlay recommand everyone. The matrial is super slight and great for me, but little see througts, so be careful
  </p>
  </div>
</div>
  </div>

</div>


    </div>
  );
};

export default ProductDetail;
