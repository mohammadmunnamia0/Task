import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="lg:mx-[112px]">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
               <Link>Home</Link>
              </li>
              <li>
               <Link>Why it Works</Link>
              </li>
              <li>
               <Link>Features</Link>
              </li>
              <li>
               <Link>How It Works</Link>
              </li>
              <li>
               <Link>Testimonials</Link>
              </li>
              <li>
               <Link>Before & After</Link>
              </li>
              <li>
               <Link>Science</Link>
              </li>
              <li>
               <Link>FAQs</Link>
              </li>
              <li>
               <Link>Shop Bundles</Link>
              </li>
            
            </ul>
          </div>
          <a className="text-[#FF6600] text-xl">logo</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
               <Link>Home</Link>
              </li>
              <li>
               <Link>Why it Works</Link>
              </li>
              <li>
               <Link>Features</Link>
              </li>
              <li>
               <Link>How It Works</Link>
              </li>
              <li>
               <Link>Testimonials</Link>
              </li>
              <li>
               <Link>Before & After</Link>
              </li>
              <li>
               <Link>Science</Link>
              </li>
              <li>
               <Link>FAQs</Link>
              </li>
              <li>
               <Link>Shop Bundles</Link>
              </li>
           
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white bg-[#FF6600] rounded-full">Contact Us  <FaArrowRightLong className="flex items-center justify-center" /></a>
        </div>
      </div>
    </div>
  );
};

export default navbar;
