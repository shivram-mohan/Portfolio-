import React from 'react'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/in/shivram-mohan/',
    github: 'https://github.com/shivram-mohan',
    instagram: 'https://www.instagram.com/shivram_2604/'
};

const Navbar = () => {
    return (
      <nav className='mb-20 flex items-center justify-center py-6'>
        <div className='m-4 pr-4 gap-8 flex justify-center items-center text-2xl'>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className='hover:text-blue-500'>
            <FaLinkedin />
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className='hover:text-gray-800'>
            <FaGithub />
          </a>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className='hover:text-pink-500'>
            <FaInstagram />
          </a>
        </div>
      </nav>
    );
}
  

export default Navbar
