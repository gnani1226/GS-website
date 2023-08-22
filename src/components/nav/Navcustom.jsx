// src/components/Navbar.js
import React, { useState } from 'react';
import { useStore } from '@nanostores/react';

import {
  AiFillGithub,
  AiOutlineStar,
  AiFillInstagram,
  AiFillCaretDown,
} from 'react-icons/ai';
import { BiSolidUpArrow } from 'react-icons/bi';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import '../../styles/global.css';
import Mobileview from './Mobileview';
import { isSolution, isPrice } from '../../store';
// import { useStore } from '@nanostores/react'
// import {$toggleAtom} from '../../store.js'

const Navcustom = () => {
  const [mobileIcon, setmobileIcon] = useState(false);
  const $isSolution = useStore(isSolution);
  const $isPrice = useStore(isPrice);

  // const $isOpen = useStore($toggleAtom)
  // console.log($isOpen)

  return (
    
    <>
      <nav className="nav-custom-bg p-4 bg-opacity-100">
         <div className="container mx-auto flex justify-between items-center">
          <div className="flex justify-center items-center gap-10">
            <div className="flex items-center">
              <div className="text-white font-semibold text-lg mr-4">Logo</div>
              {/* Godspeed logo will be added here*/}
            </div>
            <div className="hidden md:flex space-x-4">
              <button className="text-white">Documentation</button>
              <button className="text-white">Products</button>

              <div className="relative">
                <div
                  className="flex flex-row items-center"
                  onClick={() => {
                    isSolution.set(!$isSolution);
                    isPrice.set(false);
                  }}
                >
                  <button
                    className={`text-${
                      $isSolution ? 'red-500' : 'white'
                    } px-2 py-2 focus:outline-none `}
                  >
                    Solution
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`text-${
                        $isSolution ? 'red-500' : 'white'
                      } h-5 w-5 text-white mt-2`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {$isSolution ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </svg>
                  </button>
                </div>
                {$isSolution && (
                  <div className="absolute z-20 top-full left-0 mt-4 py-2 w-60 bg-white border border-gray-300 rounded shadow">
                    <ul className='w-100%'>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Option 1
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Option 2
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Option 3
                      </li>
                      
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative">
                <div
                  className="flex flex-row items-center"
                  onClick={() => {
                    isPrice.set(!isPrice.get());
                    isSolution.set(false);
                  }}
                >
                  <button
                    className={`text-${
                      $isPrice ? 'red-500' : 'white'
                    } px-2 py-2 focus:outline-none `}
                  >
                    Pricing
                  </button>

                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`text-${
                        $isPrice ? 'red-500' : 'white'
                      } h-5 w-5 text-white mt-2`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {$isPrice ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </svg>
                  </button>
                </div>

                {$isPrice && (
                  <div className="absolute z-20 top-full left-0 mt-4 py-2 w-60 bg-white border border-gray-300 rounded shadow">
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Option 1
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Option 2
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Option 3
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <button className="text-white">For Developers</button>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-0">
            {/* Social Links */}

            <div className="flex justify-center items-center gap-0 mr-4 hover:bg-purple-500 hover:rounded px-4 transition duration-300">
              <a href="#" className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white mt-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <AiOutlineStar />
                </svg>
              </a>
              <button className="text-white">star us on github</button>
            </div>

            <a href="#" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white mt-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <AiFillInstagram />
              </svg>
            </a>
          </div>
          <div className="md:hidden flex flex-col border border-white-200 rounded-md p-2">
            {/* Mobile Menu Icon */}
            <button
              className="text-red"
              onClick={() => setmobileIcon((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {mobileIcon && <Mobileview />}
      </nav>
      <hr className="border border-gray-500" />
    </>
  );
};

export default Navcustom;
