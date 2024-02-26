import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import VueLogo from '../assets/Vue.png'
import ReactLogo from '../assets/ho.png'
import AngLogo from '../assets/Ang.png'
import react from '../assets/react.svg'
import { useState } from 'react'
import { useDarkMode } from '../DarkModeContext'
export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  return (
  
    <nav className="flex items-center justify-between flex-wrap bg-gray-300 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <span className="font-semibold text-xl tracking-tight text-pink-600">Pen Testing</span>
    </div>
    <div className="block lg:hidden">
      <button
        onClick={toggleMenu}
        className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700 hover:text-white hover:border-white"
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      className={`${
        isMenuOpen ? '' : 'hidden'
      } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
    >
      <div className="text-sm lg:flex-grow">
        <Link
          to="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
        >
          Home
        </Link>
        <Link
          to="/Contact"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
        >
          Contact
        </Link>
        <Link
          to="/Blog"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
        >
          Blog
        </Link>
        <Link
          to="/Register"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
        >
          Register
        </Link>
        <Link
          to="/Login"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
        >
          Login
        </Link>
      </div>
      <div className="flex lg:gap-x-7  md: hidden sm:hidden">
        <img src={AngLogo} className="w-10 h-10 " alt="Angular Logo" />
        <img src={VueLogo} className="w-10 h-10" alt="Vue.js Logo" />
        <img src={react} className="w-10 h-10" alt="React Logo" />
      </div>
      <button
        onClick={toggleDarkMode}
        className={`${
          darkMode ? 'bg-slate-800 text-pink-700 py-2 px-4 rounded' : ' bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded'
        } lg:ml-4 mt-4 lg:mt-0`}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  </nav>
   
  )
}
