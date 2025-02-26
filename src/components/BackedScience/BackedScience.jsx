import { FaPlayCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
const BackedScience = () => {
  return (
    <div className="bg-bgColor my-20">
      <div className="lg:mx-[112px]">
        {/* picture with play btn */}
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:justify-evenly mt-20">
          <div className="relative">
            <img
              className="lg:w-72 lg:h-[480px] mt-20 opacity-75 hover:opacity-100 transition-opacity duration-300"
              src="/src/assets/Banner3/image2.png"
              alt=""
            />
            <FaPlayCircle className="absolute inset-0 m-auto text-white text-6xl animate-pulse" />
          </div>
          <div className="lg:w-[630px] lg:h-[602px] lg:ml-2 grid lg:col-span-2 mt-20 relative">
            <img
              className="opacity-75 hover:opacity-100 transition-opacity duration-300"
              src="/src/assets/Banner3/image2.png"
              alt=""
            />
            <FaPlayCircle className="absolute inset-1 m-auto text-white text-6xl animate-pulse" />
          </div>
          <div className="relative">
            <img
              className="lg:w-72 lg:h-[480px] mt-20 opacity-75 hover:opacity-100 transition-opacity duration-300"
              src="/src/assets/Banner3/image2.png"
              alt=""
            />
            <FaPlayCircle className="absolute inset-0 m-auto text-white text-6xl animate-pulse" />
          </div>
        </div>
        {/*  */}
        <div className="lg:flex p-6 lg:p-0 justify-between text-white font-Montserrat ">
            <div className="mt-10">
                <h1 className="text-4xl py-4">Backed by Science</h1>
                <p>Our product is backed by clinical studies that show significant improvement in airflow and reduction in snoring for consistent users.</p>
                <ul className="py-4 grid gap-4">
                     <li className="flex  items-center"> <FaCheckCircle className="text-orange-600"/>Clinical study shows 80% improvement in nasal airflow</li>
                     <li className="flex items-center"> <FaCheckCircle className="text-orange-600"/>70% of users report reduced snoring after 2 weeks</li>
                </ul>
            </div>
            <div>
                <img src="/src/assets/BackedScience/Group.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default BackedScience;
