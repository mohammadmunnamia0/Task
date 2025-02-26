import { CiLinkedin } from "react-icons/ci";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { FaArrowRightLong, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-bgColor">
      <div className="lg:mx-[112px] px-4 lg:px-0 text-white">
        <div className="grid items-center justify-center text-center py-8">
          <h1 className="text-5xl font-Montserrat py-4">Get in Touch</h1>
          <p className="font-Montserrat ">
            Our mission is to drive progress and enhance the lives of our
            customers by <br /> delivering superior products and services that
            exceed expectations.
          </p>
          <a className="btn border border-orange-500 text-white lg:w-1/3 bg-[#FF6600] rounded-full mx-auto my-8">
            Order Now{" "}
            <FaArrowRightLong className="flex items-center justify-center" />
          </a>
          <p>©Copyright Nasal clip.com. All rights reserved. 2024</p>
        </div>
        <hr></hr>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between py-10">
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="">Privacy & Policy</a>
            <a href="">Terms & Condition</a>
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            <a href="">Home</a>
            <a href="">Resources</a>
            <a href="">FAQ</a>
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            <a className="border p-2 rounded-xl" href="">
              <FaDiscord />
            </a>
            <a className="border p-2 rounded-xl" href="">
              <FaSquareXTwitter />
            </a>
            <a className="border p-2 rounded-xl" href="">
              <FaInstagram />
            </a>
            <a
              className="border p-2 rounded-xl"
              href="https://www.linkedin.com/in/mohammad-munna-mia-340225219/"
            >
              <CiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
