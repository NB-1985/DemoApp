import Button from "../../component/re_usable/Button";

const Home = () => {
  return (
    <div>
      {/* main  //^ container */}
      <div className=" bg-[#F7FFEE] flex justify-center md:justify-end ">
        {/* inner container  */}
        <div
          className=" xl:h-[508px] md:w-[95%] w-[90%]  md:mx-0 md:justify-between  flex 
          flex-wrap md:flex-nowrap 
          "
        >
          {/* //* left side */}
          <div className="flex items-center pt-5 xl:pt-0 ">
            <div className="h-[317px] mx-auto  md:w-[350px]  lg:w-[415px]  flex flex-col justify-evenly xl:justify-between">
              <p className="text-[#0AAD0A]">Save upto 30%</p>
              <p className="lg:text-[60px]   text-[40px] lg:font-[700] md:font-[500] leading-[70px]">
                Amazing Grocery deals
              </p>
              <p className="text-[16px]   font-[400]">
                10% certifled-organic mix of fruit and veggies. Perfect for
                weekly cooking and snacking!
              </p>

              <Button name="Shop Now" />
            </div>
          </div>

          {/*  //* right side  */}
          <div className="pt-10 xl:pt-0 flex justify-end">
            <img src="./img/ewrwr 1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
