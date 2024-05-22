import React from 'react'
import logo from '../assets/whitesdmhd.png'
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex items-center'>
            <img className='mx-2 w-10' src={logo}  alt="logo" style={{width: '8%', height: '8%'}}/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl text-white' >
        <a href="https://www.linkedin.com/in/swapna-dip-mandal/" target="_blank" rel="noopener noreferrer" className='hover:text-blue-600 transition-colors duration-300'>
        <FaLinkedin />
      </a>
      <a href="https://github.com/SDM2204" target="_blank" rel="noopener noreferrer" className='hover:text-neutral-500 transition-colors duration-300'>
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/swapna_dip_mandal" target="_blank" rel="noopener noreferrer" className='hover:text-pink-500 transition-colors duration-300'>
        <FaInstagram />
      </a>
      <a href="https://x.com/swapna_scorpion" target="_blank" rel="noopener noreferrer" className='hover:text-blue-400 transition-colors duration-300'>
        <FaTwitterSquare />
      </a>
        </div> 
    </nav>
  );
};

export default Navbar;
