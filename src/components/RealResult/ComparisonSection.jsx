import { IoIosCloseCircle } from "react-icons/io";
import { BsFillCheckCircleFill } from "react-icons/bs";
import before from "../../assets/ComparisonSection/beefore.png"
import after from "../../assets/ComparisonSection/after.png"

const ComparisonSection = () => {
  return (
    <div className="flex flex-col items-center p-6  min-h-screen">
      <h1 className="text-3xl font-bold text-center">Real Results You Can Feel</h1>
      <p className="text-center text-gray-600 mt-2">
        See the difference our nasal clip can make for snoring and airflow.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-20 w-full max-w-4xl">
        <div className="text-center">
          
          <img
            src={before}
            alt="Before using nasal clip"
            className="mt-4 rounded-lg shadow-lg"
          />
          <ul className="mt-4 text-left space-y-">
            <li className="flex items-center text-gray-700 mt-10">
            <IoIosCloseCircle className="text-3xl" /> <span className="ml-2 font-semibold">Flimsy</span>
            </li>
            <li className="text-gray-600">Nasal strips have very little structure. When you inhale, they can still collapse.</li>

            <li className="flex items-center text-gray-700 mt-10">
            <IoIosCloseCircle className="text-3xl" />  <span className="ml-2 font-semibold">Unsupportive</span>
            </li>
            <li className="text-gray-600">Nasal strips don&apos;t hold your nose open as wide as Intake.</li>

            <li className="flex items-center text-gray-700 mt-10">
            <IoIosCloseCircle className="text-3xl" />  <span className="ml-2 font-semibold">Falls off</span>
            </li>
            <li className="text-gray-600">Don&apos;t wake up with your nasal strip stuck to your pillow again.</li>

            <li className="flex items-center text-gray-700 mt-10">
            <IoIosCloseCircle className="text-3xl" />  <span className="ml-2 font-semibold">Hurts your skin</span>
            </li>
            <li className="text-gray-600">Nasal strips use aggressive adhesive that can irritate skin.</li>

            <li className="flex items-center text-gray-700 mt-10">
            <IoIosCloseCircle className="text-3xl" />  <span className="ml-2 font-semibold">Pulls forward</span>
            </li>
            <li className="text-gray-600">Nasal strips rely on the leverage of your nose bridge to widen the.</li>
          </ul>
        </div>
        <div className="text-center">
          
          <img
            src={after}
            alt="Before using nasal clip"
            className="mt-4 rounded-lg shadow-lg"
          />
          <ul className="mt-4 text-left space-y-">
            <li className="flex items-center text-gray-700 mt-10">
            <BsFillCheckCircleFill  className="text-3xl text-[#FF6600]" /> <span className="ml-2 font-semibold">Actually opens your nose</span>
            </li>
            <li className="text-gray-600">Intake doesrft flex, so your nose opens to the size Band you wear. We
            can open your nose up to 100% more.</li>

            <li className="flex items-center text-gray-700 mt-10">
            <BsFillCheckCircleFill  className="text-3xl text-[#FF6600]" />  <span className="ml-2 font-semibold">Durable</span>
            </li>
            <li className="text-gray-600">Intake is built strong and durable so your nose Stays open right where
            you want it, as long as you want it.</li>

            <li className="flex items-center text-gray-700 mt-10">
            <BsFillCheckCircleFill  className="text-3xl text-[#FF6600]" />  <span className="ml-2 font-semibold">Stays on all day/night</span>
            </li>
            <li className="text-gray-600">Intake will be precisely where you left it when you awaken, keeping your
            nasal passages open for uninterrupted breathing,</li>

            <li className="flex items-center text-gray-700 mt-10">
            <BsFillCheckCircleFill  className="text-3xl text-[#FF6600]" />  <span className="ml-2 font-semibold">Skin safe</span>
            </li>
            <li className="text-gray-600">Intake uses a strong magnetic Band to hold your nose open, not the
bridge of your nose. We use less adhesive and we care that your skin
stays where it belongs-—on your nose.</li>

            <li className="flex items-center text-gray-700 mt-10">
            <BsFillCheckCircleFill  className="text-3xl text-[#FF6600]" />  <span className="ml-2 font-semibold">Pulls forward</span>
            </li>
            <li className="text-gray-600">Intake pulls out on your nose. Using the suction cup like Tabs, the Band.</li>
          </ul>
        </div>

       
      </div>
    </div>
  );
};

export default ComparisonSection;
