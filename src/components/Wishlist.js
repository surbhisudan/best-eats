import React,{useState} from "react";
import {MdFavorite} from "react-icons/md"
import Foods from "./Foods";



const Wishlist=({wishlistItems,removeFromWishlist,addToCart})=>{
    const [hoveredwishlist, setHoveredwishlist] = useState(null);

    const handleRemoveWishlist = (item) => {
        removeFromWishlist(item);
        
        // Call the parent component's function to remove the item from the cart
      };
const handleAddToCart = (item) => {
    addToCart(item);
  };

 
    return(
        <>
      <div>
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-slate-600'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 font-bold'>
            My Wishlist
          </h1>
        </div>
        <div className='bg-black/70 h-screen'>
          <ul className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
            {wishlistItems.map((item, index) => (
              <li
                key={index}
                className='border shadow-lg rounded-lg hover:scale-105 duration-300 relative'
                onMouseEnter={() => setHoveredwishlist(index)}
                onMouseLeave={() => setHoveredwishlist(null)}
              >
                {hoveredwishlist === index && (
                  <MdFavorite size={25}
                    onClick={() => {handleRemoveWishlist(item);
                    }}
                    className='text-red-500 absolute right-3 top-2 cursor-pointer'
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
                <button
        onClick={() => handleAddToCart(item)}
        className=' block w-full rounded-full px-3 py-1 mt-2 text-center bg-orange-600 text-white border-none'
      >
        Add to Cart
      </button>
              </li>
              
            ))}
          </ul>
         
          {wishlistItems.length===0 && (
            <h2 className=' text-white  py-3 text-2xl max-w-full text-center'>Your wishlist is Empty!!</h2>
          )}
         
        
        </div>
      </div>
    </>
    )

}
export default Wishlist;