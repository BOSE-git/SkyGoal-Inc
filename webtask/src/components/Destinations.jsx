import React, { useState } from 'react';
import DestinationCard from './DestinationCard.jsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Destinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create an array with 10 elements
  const destinationsArray = new Array(10).fill(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === destinationsArray.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? destinationsArray.length - 1 : prevIndex - 1));
  };


  return (
    <div className="relative" >
      <h1 className="text-3xl mx-20 mt-[200px] mb-[50px]" >Our Destinations</h1>
      <div className=" mx-16 flex overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out transform"
          style={{
            width: `${destinationsArray.length * 100}%`,
            transform: `translateX(-${(currentIndex / destinationsArray.length) * 100}%)`,
          }}
        >
          {destinationsArray.map((_, index) => (
            <DestinationCard key={index} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-[-100px] left-0 right-0 flex justify-center mb-4">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded-l"
          onClick={handlePrev}
        >
          <ArrowBackIcon/>
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded-r"
          onClick={handleNext}
        >
          <ArrowForwardIcon/>
        </button>
      </div>
    </div>
  );
};

export default Destinations;
