import bgImage from "/src/assets/HeroAvatar/bg.png";
import avatar1 from "/src/assets/HeroAvatar/Avatar1.png"
import avatar2 from "/src/assets/HeroAvatar/Avatar2.png"
import avatar3 from "/src/assets/HeroAvatar/Avatar3.png"
const Hero = () => {
    return (
      <div className="relative min-h-[612px] flex items-center bg-cover bg-center px-10"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      >
       
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  
        <div className="relative text-white max-w-lg lg:ml-[112px]">
            <div className="flex relative">
                <img src={avatar1} alt="" className="rounded-full " />
                <img src={avatar2} alt="" className="rounded-full absolute ml-8" />
                <img src={avatar3} alt="" className="rounded-full absolute ml-16" />
                <span className="relative px-4 ml-14 flex items-center text-center bg-white rounded-full text-black font-semibold">26k Happy Customers</span>
            </div>
          <h1 className="mb-5 text-5xl font-bold">
            Breathe better, <br /> live better!
          </h1>
          <p className="mb-5">
            Discover how effortless breathing can enhance your life. Take the
            first step today!
          </p>
          <button className="bg-[#FF6600] text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition">
            Shop Now
          </button>
        </div>
      </div>
    );
  };
  
  export default Hero;
  