import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";
import { PiCheckCircleLight } from "react-icons/pi";

const plans = [
  {
    title: "1-month supply",
    tabs: 30,
    price: 29.99,
    discount: "5%",
    highlight: false,
  },
  {
    title: "3-month supply",
    tabs: 90,
    price: 79.99,
    discount: "10%",
    highlight: true,
  },
  {
    title: "6-month supply",
    tabs: 180,
    price: 149.99,
    discount: "20%",
    highlight: false,
  },
  {
    title: "1-Year supply",
    tabs: 365,
    price: 240.99,
    discount: "30%",
    highlight: false,
  },
];

const PlanCard = ({ title, tabs, price, discount, highlight }) => {
  return (
    <div
      className={`relative max-w-xs p-6 bg-white border rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:border-orange-500 ${
        highlight ? "border-orange-500" : "border-gray-200"
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-24 rounded-t-xl transition-colors duration-300 ${
          highlight ? "bg-orange-500" : "bg-[#FFF0E6]"
        }`}
      >
        <div className="text-black text-center">
          <h3
            className={`mt-4 text-lg font-semibold ${
              highlight ? "text-white" : "bg-[#FFF0E6]"
            }`}
          >
            {/* <h3 className="mt-4 text-lg font-semibold "> */}
            {/* className={`mt-4 text-lg font-semibold ${
          highlight ? "text-white" : "bg-[#FFF0E6]"}`} */}

            {title}
          </h3>
          <p className={` ${highlight ? "text-white" : "bg-[#FFF0E6]"}`}>
            {tabs} Sticky Tabs
          </p>
        </div>
      </div>
      <div className="grid items-center justify-center text-center">
        <p className="mt-20 text-2xl font-bold text-gray-900 ">
          ${price.toFixed(2)}
        </p>
        <span
          className={`${highlight ? "border-orange-500" : "border-gray-200"}`}
        >
          ---------------------
        </span>
        <p className="text-orange-500 font-semibold">({discount} discount)</p>
        <button className="mt-4  py-2 text-white font-semibold rounded-lg transition-colors duration-300 bg-[#FF6600] hover:bg-orange-600">
          Buy Now
        </button>
      </div>
      <ul className="mt-4 space-y-2 text-gray-600">
        <li className="flex items-center gap-2">
          <PiCheckCircleLight className="text-xl text-green-500" /> 60 days Money back
        </li>
        <li className="flex items-center gap-2">
          <PiCheckCircleLight className="text-xl text-green-500" /> Whole Starter kit
        </li>
        <li className="flex items-center gap-2">
          <PiCheckCircleLight className="text-xl text-green-500" /> Free Returns
        </li>
        <li className="flex items-center gap-2">
          <PiCheckCircleLight className="text-xl text-green-500" /> <span>Free shipping with <br /> every
          bundle after <br />  3-month supply</span>
        </li>
      </ul>

      <p className="mt-3 flex gap-1">
        <div className="flex mt-2 text-yellow-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="mt-1">
          {" "}
          <span className="font-bold">5</span> (500+ Reviews)
        </div>
      </p>
    </div>
  );
};

PlanCard.propTypes = {
  title: PropTypes.string.isRequired,
  tabs: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.string.isRequired,
  highlight: PropTypes.bool.isRequired,
};

export default function PricingPlans() {
  return (
    <div className="lg:mx-[112px]">
      <div className="flex flex-col items-center px-6 py-12 mt-10 ">
        <h2 className="text-5xl font-bold text-[#FF6600] mb-8">
          Choose the Best Plan for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}
