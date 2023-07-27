import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md';
import { useNavigate } from 'react-router-dom'; 

const Navbar = ({cartItems,wishlistItems}) => {
const [nav, setNav] = useState(false);
const [isDeliveryActive, setIsDeliveryActive] = useState(false);
const [isPickupActive, setIsPickupActive] = useState(true);

 // State for the cart items
 const [cart, setCart] = useState([]);
 const [wishlist, setWishlist] = useState([]);

 // Function to add an item to the cart
 const addToCart = (item) => {
   setCart([...cart, item]);
   alert(`Added ${item.name} to the cart!`);
 };
 const addToWishlist= (item)=>{
  setWishlist([...wishlist,item]);
  alert(`Added ${item.name} to the wishlist!`);
};
 const navigate = useNavigate();


  return (
   <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-slate-600'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best <span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
        <button
          className={`rounded-full p-2 ${isDeliveryActive ? 'font-bold bg-black text-white' : ''} `}
           onClick={() => {
           setIsDeliveryActive(false);
          setIsPickupActive(true) }}
        >
          Delivery
        </button>
        <button
          className={`rounded-full p-2 ${isPickupActive ? 'font-bold bg-black text-white' : ''} `}
          onClick={() => {
          setIsDeliveryActive(true);
          setIsPickupActive(false);}}
         >
         Pickup
        </button>


        </div>
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[250px] md:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search foods'
        />
       <button className='bg-black text-white rounded-full px-0 md:px-2 py-[5px] font-bold'>Search</button>
      </div>
      

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'>Eats</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800 cursor-pointer'>
                <li onClick={() => navigate('/wishlist')}
                 className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li onClick={() => navigate('/cart')}
                    className='text-xl py-4 flex'>
                                 <BsFillCartFill size={25} className='mr-4' /> Cart</li>
                <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;