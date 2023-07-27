import React, { useState,useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const CartPage = ({ cartItems, removeFromCart }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleRemoveItem = (item) => {
    removeFromCart(item); // Call the parent component's function to remove the item from the cart
  };

  // Calculate total price by summing the prices of all items
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <>
      <div>
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-slate-600'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 font-bold'>
            My Cart
          </h1>
        </div>
        <div className='bg-black/70 h-screen'>
          <ul className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className='border shadow-lg rounded-lg hover:scale-105 duration-300 relative'
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {hoveredItem === index && (
                  <AiOutlineClose
                    onClick={() => handleRemoveItem(item)}
                    className='bg-white absolute right-3 top-2 cursor-pointer'
                  />
                )}

                <div className='w-200px'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-full h-[200px] object-cover rounded-t-lg'
                  />
                </div>
                <div className='flex justify-between px-2 py-4 font-bold bg-white rounded-lg'>
                  {item.name} -{' '}
                  <span className='bg-orange-500 text-white p-1 rounded-full'>
                    {item.price}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          {cartItems.length===0 && (
            <h2 className=' text-white  py-3 text-2xl max-w-full text-center'>Your Cart is Empty!!</h2>
          )}
          {cartItems.length > 0 && (
            <div className=' flex p-4 bg-white mt-4 rounded-md justify-between'>
              
              <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 font-bold '>
                Total price: {totalPrice}
              </h1>
              <h1 className="font-bold bg-black text-white rounded-full
              p-4 cursor-pointer">Order Now</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
