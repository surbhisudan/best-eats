import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';



function App() {
  const slides = [
    {
      url: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      url: 'https://media.istockphoto.com/id/995903748/photo/smoked-and-spicy-tandoori-chicken-grilling-with-smoke.jpg?b=1&s=612x612&w=0&k=20&c=7JMJuPUaKt3gIzI4xo6lzZCxQ0k_mxnFEE-olSiNtjw=',
    },
    {
      url: 'https://images.pexels.com/photos/3504876/pexels-photo-3504876.jpeg?auto=compress&cs=tinysrgb&w=600',
    },

    {
      url: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      url: 'https://images.pexels.com/photos/5745991/pexels-photo-5745991.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
      <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group overflow-hidden'>
        {/* Overlay */}
        
        <div className='absolute max-w-[1300px] px-4 w-full  h-full rounded-2xl text-gray-200 max-h-[650px] flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Foods</span> Delivered</h1>
            </div>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    );
  }

export default App;