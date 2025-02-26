import { FaArrowRightLong } from "react-icons/fa6";
const OrderNow = () => {
  return (
    <div className="p-4 lg:p-0 lg:py-10">
      <div className="bg-bgColor lg:mx-[112px] py-6 lg:py-20 mt-20 rounded-xl">
        <div className="grid justify-center items-center">
          <h1 className="text-center text-xl lg:text-3xl text-white">
            Choose your plan today and <br /> start breathing easier tomorrow!
          </h1>

          <a className="btn border border-orange-500 text-white lg:w-1/3 bg-[#FF6600] rounded-full mt-4 mx-auto">Order Now <FaArrowRightLong className="flex items-center justify-center"/></a>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
