import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Alex R",
    text: "Finally, a product that actually helps with my snoring! My partner sleeps better, and so do I.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4.9,
  },
  {
    name: " R",
    text: "Finally, a product that actually helps with my snoring! My partner sleeps better, and so do I.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4.9,
  },
  {
    name: "Alex",
    text: "Finally, a product that actually helps with my snoring! My partner sleeps better, and so do I.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4.9,
  },
  // Add more testimonials if needed
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Loved by Thousands</h2>
      <div className="relative flex items-center justify-center">
        <button onClick={prevSlide} className="p-2  rounded-full text-gray-600 hover:text-white border border-orange-500 hover:bg-orange-500">
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="bg-white shadow-lg rounded-xl p-6 mx-4 w-[400px] relative">
          <p className="text-gray-600">{testimonials[currentIndex].text}</p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-3">
              <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-10 h-10 rounded-full" />
              <span className="font-semibold text-lg">{testimonials[currentIndex].name}</span>
            </div>
            <div className="flex items-center text-orange-500 font-semibold">
              {testimonials[currentIndex].rating} <span className="ml-1 text-lg">⭐</span>
            </div>
          </div>
        </div>

        <button onClick={nextSlide} className="p-2  rounded-full text-gray-600 hover:text-white border border-orange-500 hover:bg-orange-500">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
