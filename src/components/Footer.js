import React from 'react';
import {BsLinkedin,BsTwitter} from "react-icons/bs";
import { FaFacebookSquare,FaInstagramSquare } from "react-icons/fa";

const Footer=()=>{
    return(
        <div className='max-w-[1640px] mx-auto bg-slate-100 cursor-pointer'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl py-4 px-8'>
          Best <span className='font-bold'>Eats</span>
        </h1>
    <div className='max-w-[1640px] mx-auto lg:flex lg:p-4 justify-between items-center px-10 md:flex md:p-4'>
         
        <div>
            <h3 className='font-bold pt-3'>About Best Eats</h3>
            <p>Who We Are</p>
            <p>Work With Us</p>
            <p>Report Fraud</p>
            <p>Contact Us</p>
        </div>
        <div>
            <h3 className='font-bold pt-3'>For Resturants</h3>
            <p>Feeding India</p>
            <p>Partner With Us</p>
            <p>Blinkit</p>
            <p>Apps For You</p>
        </div>
        <div>
            <h3 className='font-bold pt-3'>Learn More</h3>
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms</p>
            <p>Sitemap</p>
        </div>
        <div>
            <h3 className='font-bold pt-3'>Social Media</h3>
            <div className='flex justify-evenly w-[120px] pt-2'>
            <BsLinkedin  size={20}  />
            <FaFacebookSquare  size={20}/>
            <FaInstagramSquare size={20}/>
            <BsTwitter size={20}/>
            </div>
            <div className='font-bold pt-4 '>
            © Surbhi Sudan 2023
           All Rights Reserved.

            </div>
        </div>
    </div>
    </div>
    )
}

export default Footer;
