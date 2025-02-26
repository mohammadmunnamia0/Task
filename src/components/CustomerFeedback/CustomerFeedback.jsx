import { IoShieldCheckmark } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import image1 from "../../assets/Feedback/Ellipse3.png"
import image2 from "../../assets/Feedback/Ellipse1.png"
import image3 from "../../assets/Feedback/Ellipse2.png"
import image4 from "../../assets/Feedback/image.png"

const CustomerFeedback = () => {
  return (
    <div className="lg:mx-[112px] mt-20 p-6 lg:p-0">
      <h1 className="text-5xl font-Montserrat ml-8 lg:ml-0">Customer Feedback</h1>
     
      {/* c1 */}
      <div className="mt-16">
        <div className="flex justify-between">
          <div className="flex gap-2 justify-center items-center ">
            <img src={image1} alt="" />
            <h2 className="text-2xl font-bold">Arlene McCoy</h2><IoShieldCheckmark className="text-green-500  flex justify-center items-center text-2xl"/>
          </div>
          <div>
            <button className=" bg-blue-100 p-2 px-4 rounded-xl">1 Week Ago</button>
          </div>
        </div>
        <div className="flex mt-5">
            <div className="flex gap-2 text-2xl mt-2 text-orange-500"><FaStar /><FaStar  /><FaStar  /><FaStar  /><FaStar  /></div> 
            <span className="text-3xl ml-4">|</span>
            <div className="flex gap-2 text-2xl mt-2 ml-4 justify-center items-center "><FaHeart className="text-red-500" />(1.5k)</div>
        </div>
        <div className="mt-4">
        <p>This nasal clip has helped me reduce snoring and breathe easier at night. Comfortable and <br /> barely noticeable!</p>
        <img className="mt-4" src="/src/assets/Feedback/image 9.png" alt="" />
        </div>
      </div>
      {/* c2 */}
      <div className="mt-16">
        <div className="flex justify-between">
          <div className="flex gap-2 justify-center items-center ">
            <img src={image2} alt="" />
            <h2 className="text-2xl font-bold">Ralph Edwards</h2><IoShieldCheckmark className="text-green-500  flex justify-center items-center text-2xl"/>
          </div>
          <div>
            <button className=" bg-blue-100 p-2 px-4 rounded-xl">1 Week Ago</button>
          </div>
        </div>
        <div className="flex mt-5">
            <div className="flex gap-2 text-2xl mt-2 text-orange-500"><FaStar /><FaStar  /><FaStar  /><FaStar  /><FaStar  /></div> 
            <span className="text-3xl ml-4">|</span>
            <div className="flex gap-2 text-2xl mt-2 ml-4 justify-center items-center "><FaHeart className="text-red-500" />(1.5k)</div>
        </div>
        <div className="mt-4">
        <p>I use this nasal clip during my runs, and it really improves airflow. I can breathe more freely <br /> and last longer during intense sessions.</p>
        <img className="mt-4" src="/src/assets/Feedback/image 9.png" alt="" />
        </div>
      </div>
      {/* c3 */}
      <div className="mt-16">
        <div className="flex justify-between">
          <div className="flex gap-2 justify-center items-center ">
            <img src={image3} alt="" />
            <h2 className="text-2xl font-bold">Cameron Williamson</h2><IoShieldCheckmark className="text-green-500  flex justify-center items-center text-2xl"/>
          </div>
          <div>
            <button className=" bg-blue-100 p-2 px-4 rounded-xl">1 Week Ago</button>
          </div>
        </div>
        <div className="flex mt-5">
            <div className="flex gap-2 text-2xl mt-2 text-orange-500"><FaStar /><FaStar  /><FaStar  /><FaStar  /><FaStar  /></div> 
            <span className="text-3xl ml-4">|</span>
            <div className="flex gap-2 text-2xl mt-2 ml-4 justify-center items-center "><FaHeart className="text-red-500" />(1.5k)</div>
        </div>
        <div className="mt-4">
        <p>I’ve been using the nasal clip to combat my chronic nasal congestion, and it’s made a world of <br /> difference. Highly effective and comfortable!</p>
        <img className="mt-4" src={image4} alt="" />
        </div>
      </div>
    
    </div>
  );
};

export default CustomerFeedback;
