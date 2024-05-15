import React from 'react'
import logo from '../assets/whitesdmhd.png'
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex items-center'>
            <img className='mx-2 w-10' src={logo}  alt="logo" style={{width: '8%', height: '8%'}}/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaTwitterSquare />
        </div> 
    </nav>
  );
};

export default Navbar;
