import { FaCheckCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Banner3 = () => {
  return (
    <div className="bg-bgColor my-10">
      <div className="lg:mx-[112px] lg:py-[80px]">


        <section className="lg:flex text-white justify-center px-8 py-8 lg:py-0 lg:px-0 lg:gap-20">
          <div>
            <img className="w-[584px] h-[478px]" src="/src/assets/Banner3/image1.png" alt="" />
          </div>
          <div className=" py-4 lg:py-24">
            <h1 className="text-4xl font-bold font-Montserrat">Pain Points</h1>
            <h3 className="text-2xl font-semibold font-Montserrat py-2">
              Struggling with Snoring or Congestion?
            </h3>
            <p className="font-Montserrat py-4">
              Whether its snoring, allergies, or breathing difficulties during
              exercise, <br /> our nasal clip is here to help. These issues can disrupt
              your sleep, lower <br /> your energy, and impact your quality of life.
            </p>
         
            <ul className="grid font-Montserrat space-y-2 text-white">
              {[
                "Nasal congestion",
                "Optimized Airflow",
                "Allergies affecting breathing",
                "Struggling to breathe during workouts",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <GoDotFill className="text-orange-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>


        <section className="lg:flex text-white justify-center px-8 py-8 lg:py-0 lg:px-0 lg:gap-20">
        
          <div className="py-4 lg:py-24">
            <h1 className="text-4xl font-bold font-Montserrat">Solution Overview</h1>
            <h3 className="text-2xl font-semibold font-Montserrat py-2">
              Struggling with Snoring or Congestion?
            </h3>
            <p className="font-Montserrat py-4">
            Our nasal clip is scientifically designed to fits seamlessly <br /> into your daily routine.
            </p>
         
            <ul className="grid font-Montserrat space-y-2 text-white">
            {[
                "Enhance airflow",
                "Reduce snoring",
                "Clear nasal passages",
                "Made from soft",
                "Comfortable Materials",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-orange-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img className="w-[584px] h-[478px]" src="/src/assets/Banner3/image2.png" alt="" />
          </div>
        </section>


      </div>
    </div>
  );
};

export default Banner3;
