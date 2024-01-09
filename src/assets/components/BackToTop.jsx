import React, { useState, useEffect } from 'react';
import backtotop from '../img/back-to-top-.webp'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to show/hide the button
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } fixed z-50 bottom-8 right-8 p-2 bg-[yellow] text-white rounded-full transition-opacity duration-300 ease-in-out focus:outline-none`}
      onClick={scrollToTop}
    >
      <img src={backtotop} alt="backtotop" className='max-w-[35px] max-h-[35px]' />
    </button>
  );
};

export default BackToTopButton;