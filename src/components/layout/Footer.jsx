import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const currentYear = new Date().getFullYear;

function Footer() {
  return (
    <div className='flex justify-between bg-neutral py-4 shadow-lg' >
        <div className="ml-5">
            Copyright &copy; {currentYear} Idris Inc.
        </div>
        <div className="mr-6">
            <a href="https://github.com/Idris110"><FaGithub className='inline text-2xl mx-2' /></a>
            <a href="https://www.linkedin.com/in/idris-ratlamwala-15390221a"><FaLinkedinIn className='inline text-2xl mx-2' /></a>
            
        </div>
    </div>
  )
}

export default Footer