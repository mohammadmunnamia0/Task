import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import applePay from "/src/assets/ProductOverview/applePay.png";
import googlePay from "/src/assets/ProductOverview/googlePay.png";
import shopPay from "/src/assets/ProductOverview/shopPay.png";
import visa from "/src/assets/ProductOverview/visa.png";
import product1 from "/src/assets/ProductOverview/product1.png";
import product2 from "/src/assets/ProductOverview/product2.png";
import product3 from "/src/assets/ProductOverview/product3.png";
import product4 from "/src/assets/ProductOverview/product4.png";



const ProductOverview = () => {
  const [selectedImage, setSelectedImage] = useState(product1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="lg:max-w-5xl mx-auto p-4 lg:p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Product Image & Thumbnails */}
      <div>
        <div className="p-6 bg-orange-100 rounded-lg">
          <img src={selectedImage} alt="Product" className="w-full" />
        </div>
        <div className="flex gap-4 mt-4">
          {[product1, product2, product3, product4].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Thumbnail"
              className={`w-20 h-20 p-2 border-2 rounded-md cursor-pointer transition ${
                selectedImage === img ? "bg-bgColor" : "border-bgColor"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Right: Product Details */}
      <div>
        <div className="flex items-center gap-2 text-orange-500 text-lg">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-600 text-sm">4.5 (500+ Reviews)</span>
        </div>
        <h1 className="text-3xl font-bold mt-2">Noseclip</h1>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-2xl font-bold text-orange-600">$12.00</span>
          <span className="text-gray-400 line-through">$20.00</span>
          <span className=" text-white bg-orange-600 px-2 py-1 rounded text-sm font-semibold">
            SAVE 10%
          </span>
        </div>
        <p className="mt-4 text-gray-700">
          A nasal clip is a small device typically used to pinch or secure the nostrils
          for various purposes, such as during sports, medical treatments, or
          personal health practices. It enhances airflow and reduces snoring.
        </p>
        <ul className="mt-4 grid grid-cols-2 space-y-2 text-gray-700">
          {[
            "Boost performance",
            "Optimized Airflow",
            "Stop snoring",
            "100% Drug Free",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <FaCheckCircle className="text-orange-600" /> {item}
            </li>
          ))}
        </ul>
        <button className="mt-6 w-full bg-orange-500 text-white px-6 py-3 rounded-full flex text-center items-center gap-2 text-lg font-semibold
         hover:bg-orange-600 transition">
          Add to Cart <FaArrowRight />
        </button>
        <div className="grid grid-cols-2 lg:flex gap-4 mt-6">
          {[applePay, googlePay, shopPay, visa].map((pay, i) => (
            <img key={i} src={pay} alt="Payment" className="h-10 pl-10" />
          ))}
        </div>
        <div className="mt-8 space-y-4 text-gray-600">
          {["Sizing information", "Free resizing", "Money back guarantee & free returns"].map((item, index) => (
            <div key={index} className="border-b pb-2 cursor-pointer" onClick={() => toggleAccordion(index)}>
              <div className="flex justify-between items-center">
                <p>{item}</p>
                {openAccordion === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openAccordion === index && <p className="mt-2 text-sm text-gray-500">Details about {item}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
