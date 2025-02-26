import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../../assets/WhyChoose/image1.png"
import image2 from "../../assets/WhyChoose/image.png"


const cn = (...classes) => classes.filter(Boolean).join(" ");

const slides = [
  {
    image:image1,
    title: "Reduces Snoring",
    description:
      "Our nasal clip is scientifically designed to fit seamlessly into your daily routine.",
  },
  {
    image: image2,
    title: "Improves Breathing",
    description:
      "Enhance airflow and breathe easier during activities and rest.",
  },
  {
    image:image1,
    title: "Reduces Snoring",
    description:
      "Our nasal clip is scientifically designed to fit seamlessly into your daily routine.",
  },
  {
    image:image2,
    title: "Improves Breathing",
    description:
      "Enhance airflow and breathe easier during activities and rest.",
  },
];

export default function WhyChoose() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-4xl mx-auto text-center py-10 px-4">
      <h2 className="text-3xl font-Montserrat font-bold mb-4">Why Choose Our <br /> Nasal Clip?</h2>
      <p className="text-gray-600 mb-6">
        Our nasal clip provides a simple, effective solution for snoring,
        congestion, <br /> and improved airflow during activities, offering comfort and
        relief.
      </p>

      {/* Navigation Buttons */}
      <div className=" ml-32 mt-8 lg:mt-0 lg:ml-[740px] flex gap-4">
        <button
          onClick={prevSlide}
          className="transform -translate-y-1/2 border border-orange-500 hover:bg-orange-500 p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600 hover:text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="transform -translate-y-1/2 border border-orange-500 hover:bg-orange-500  p-2 rounded-full shadow-md"
        >
          <ChevronRight className="w-5 h-5 text-gray-600 hover:text-white" />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-xl mt-6">
  <div
    className="flex transition-transform duration-500"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {slides.map((slide, index) => (
      <div key={index} className="min-w-full flex-shrink-0 relative">
        <img
          src={slide.image}
          alt={slide.title}
          className=" lg:w-full rounded-lg"
        />
        <div className="absolute lg:top-3/4 text-left lg:text-white p-4 lg:bg-black bg-opacity-5 rounded-lg">
          <h3 className="text-xl font-bold">{slide.title}</h3>
          <p>{slide.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Pagination Dots */}
      <div className="flex space-x-2 lg:mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-2 w-6 rounded-full cursor-pointer transition-all",
              currentIndex === index ? "bg-orange-500 w-8" : "bg-gray-300"
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
