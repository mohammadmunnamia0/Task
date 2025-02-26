import image1 from "../../assets/HowWorks/Image1.png"
import image2 from "../../assets/HowWorks/Image2.png"
const HowWork = () => {
  return (
    <div className="bg-bgColor my-10">
      <div className="lg:mx-[112px] lg:py-[80px]">
        <section className="lg:flex text-white justify-center gap-20 ">
          <div>
            <div className="p-4 lg:p-0">
              <h1 className="text-4xl font-bold font-Montserrat">
                Pain Points
              </h1>
              <h3 className="text-2xl font-semibold font-Montserrat py-2">
                Struggling with Snoring or Congestion?
              </h3>
              <p className="font-Montserrat py-4">
                Whether its snoring, allergies, or breathing difficulties during
                exercise, <br /> our nasal clip is here to help. These issues
                can disrupt your sleep, lower <br /> your energy, and impact
                your quality of life.
              </p>
            </div>
            <div className="p-4 lg:p-0">
              <img
                className="lg:w-[584px] lg:h-[600px]"
                src={image1}
                alt=""
              />
            </div>
          </div>
          <div className="px-4 lg:px-0 lg:w-[580px]">
            <div className="rounded-xl p-6 mt-6 bg-orange-800">
              <div className="absolute -mt-6 ml-[492px] p-[10px] rounded-es-xl rounded-tr-md bg-[#FF6600]">
                Step 1
              </div>
              <h2 className="font-Montserrat font-semibold text-2xl">Clean</h2>
              <p className="font-Montserrat">
                Clean your nose thoroughly to remove any dirt or oil from the
                skin. Let your nose dry completely before applying the Tabs.{" "}
                <br />
                <span className="font-bold font-Montserrat">Pro-Tip:</span>{" "}
                Cleanse with soap and water or use an alcohol prep pad for best
                results.
              </p>
            </div>

            <div className="rounded-xl p-6 mt-6 bg-orange-800">
              <div className="absolute -mt-6 ml-[492px] p-[10px] rounded-es-xl rounded-tr-md bg-[#FF6600]">
                Step 2
              </div>
              <h2 className="font-Montserrat font-semibold text-2xl">Apply</h2>
              <p className="font-Montserrat">
                Using the Applicator. apply one adhesive Tab to each side Of
                your nose. just above the nostrils. Press each Tab onto your
                skin to ensure complete contact. Wait a few minutes before
                attaching the band.
              </p>
            </div>

            <div className="rounded-xl p-6 mt-6 bg-orange-800">
              <div className="absolute -mt-6 ml-[492px] p-[10px] rounded-es-xl rounded-tr-md bg-[#FF6600]">
                Step 3
              </div>
              <h2 className="font-Montserrat font-semibold text-2xl">
                Tab placement
              </h2>
              <p className="font-Montserrat">
                There are some tips to use I-I-Will.
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Steel disc placed directly above the nostril (not on the
                  nostril)
                </li>
                <li>Contoured indent fits around the nostril</li>
                <li>
                  100% contact with skin on the nose, not the cheek. Always be
                  sure to apply the Tabs properly. If the Tabs aren&apos;t placed
                  well, the Band will not attach well.
                </li>
              </ul>
            </div>

            <div className="rounded-xl p-6 mt-6 bg-orange-800">
              <div className="absolute -mt-6 ml-[492px] p-[10px] rounded-es-xl rounded-tr-md bg-[#FF6600]">
                Step 4
              </div>
              <h2 className="font-Montserrat font-semibold text-2xl">Enjoy</h2>
              <p className="font-Montserrat">
                Place the U-will band over your nose. The magnetic ends of the
                Band will snap onto the Tabs. <br />
                <span className="font-bold font-Montserrat">Pro-Tip:</span> Make
                sure the Band is not upside down. The magnets should be facing
                down.
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------------------- */}

        <section className="lg:flex text-white justify-center gap-20 mt-20">
          <div className="px-4 lg:px-0 lg:w-[580px] mt-20">
            <div className="rounded-xl p-6 mt-6 bg-orange-800 backdrop-blur-lg">
              <h2 className="font-Montserrat font-semibold text-2xl">
                4 Bands
              </h2>
              <p className="font-Montserrat">
                You can easily choose which works best for you.
              </p>
            </div>
            <div className="rounded-xl p-6 mt-6 bg-orange-800 backdrop-blur-lg">
              <h2 className="font-Montserrat font-semibold text-2xl">
                15 or 30 Tabs
              </h2>
              <p className="font-Montserrat">
                Tabs are made with 3M tape, they&apos;re safe for sensitive skin.
              </p>
            </div>
            <div className="rounded-xl p-6 mt-6 bg-orange-800 backdrop-blur-lg">
              <h2 className="font-Montserrat font-semibold text-2xl">
                Applicator
              </h2>
              <p className="font-Montserrat">
                Use magnetic Applicatorto pick up and attach Tab precisely.
              </p>
            </div>
          </div>

          <div>
            <div className="p-8 lg:p-0">
              <h1 className="text-3xl lg:text-4xl font-semibold font-Montserrat">
                What’s in start kit
              </h1>
            </div>
            <div>
              <img
                className="lg:w-[584px] lg:h-[400px] lg:mt-16 p-6 lg:p-0"
                src={image2}
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowWork;
