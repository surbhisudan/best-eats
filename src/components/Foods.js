import React, { useState } from 'react';
import { data } from '../data/data.js';
import {MdFavorite} from 'react-icons/md';


const Foods = ({ addToCart, addToWishlist }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleAddToWishlist =(item) => {
    addToWishlist(item);
  }
  const handleToggleFavorite = (index) => {
    setFoods((prevFoods) => {
      const updatedFoods = prevFoods.map((item, i) => {
        if (i === index) {
          return { ...item, isFavorited: !item.isFavorited };
        }
        return item;
      });
      return updatedFoods;
    });
  };
  
  

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Salads
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice(99)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              99
            </button>
            <button
              onClick={() => filterPrice(149)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              149
            </button>
            <button
              onClick={() => filterPrice(289)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              289
            </button>
            <button
              onClick={() => filterPrice(399)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              399
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
      {foods.map((item, index) => (
  <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 relative'>
    <div className='absolute top-2 right-2 cursor-pointer text-white'>
    <MdFavorite
          size={25}
         className={item.isFavorited ? 'text-red-500' : 'white '}
         onClick={() => {
          handleToggleFavorite(index);
          handleAddToWishlist(item);
        }}
   
     />
     </div>

           
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
            <button
        onClick={() => handleAddToCart(item)}
        className=' block w-full rounded-full px-3 py-1 mt-2 text-center bg-orange-600 text-white border-none'
      >
        Add to Cart
      </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods