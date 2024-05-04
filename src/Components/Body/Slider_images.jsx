import React, { useState, useEffect } from 'react';
import './Slider_images.css'; 

import image1 from './Slider_images/WhatsApp Image 2024-05-04 at 09.11.40_4ce8c3c3.jpg';
import image2 from './Slider_images/WhatsApp Image 2024-05-04 at 09.11.40_9f76b04b.jpg';
import image3 from './Slider_images/WhatsApp Image 2024-05-04 at 09.11.40_c2776e76.jpg';

const images = [image1, image2, image3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval); 

  }, []);

  return (
    <div className="slider-container">
      <div className="image-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button className="prev-button" onClick={prevSlide}>Prev</button>
      <button className="next-button" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
