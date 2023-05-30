import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; 

import {styles} from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full items-center flex py-5 fixed top-0 z-20 justify-between 
      `}
    >

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0,0);
          }}>
          <img className='w-9 h-9 object-contain' src='../../public/logo.png' alt='logo'></img>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Suraj Shukla &nbsp; <span className='sm:block hidden'>| MERN stack developer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex gap-10'>
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className={`${
                  active === navLink.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(navLink.title)}>
              <a href={`#${navLink.id}`}>
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>
      
      
      <div className='sm:hidden flex flex-1 justify-end items-center'>

        <img 
          alt = 'menu'
          src={ toggle ? close : menu}
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle( !toggle )
        }></img>

        <div 
          className={`
          ${ !toggle ? 'hidden': 'visible'} 
          absolute top-20 right-0 mx-4 my-2 min-w-[140px] 
          black-gradient p-6 rounded-xl`}
        >

        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className={`${
                  active === navLink.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(navLink.title)}>
              <a href={`#${navLink.id}`}>
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar