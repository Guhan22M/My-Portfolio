import React from 'react'
import {FaGithub, FaHackerrank, FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
// import logo from "../assets/logo.webp"


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
          <div className='flex flex-shrink-0 items-center'>
            <a href='/' aria-label='Home' className='text-5xl font-bold '>
              MG</a>
          </div>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://github.com/Guhan22M' target='_blank' rel='noopener noreferrer'> <FaGithub/> </a>
            <a href='https://www.linkedin.com/in/guhan-m-b38720257/' target='_blank' rel='noopener noreferrer'> <FaLinkedin/> </a>
            <a href='https://leetcode.com/u/guhan2218/' target='_blank' rel='noopener noreferrer'> <SiLeetcode/> </a>
            <a href='https://www.hackerrank.com/profile/guhan2218' target='_blank' rel='noopener noreferrer'> <FaHackerrank/> </a>
        </div>
    </nav>
  )
}

export default Navbar