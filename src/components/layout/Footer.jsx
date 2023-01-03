import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';


function Footer() {
  
  return (
    <div className='flex bg-neutral shadow-lg text-white justify-between py-4 shadow-lg' >
        <div className="ml-5 ">
            Copyright &copy; 2023 Idris.
        </div>
        <div className="mr-6">
            <a href="https://github.com/Idris110"><FaGithub className='inline text-2xl mx-2' /></a>
            <a href="https://www.linkedin.com/in/idris-ratlamwala-15390221a"><FaLinkedinIn className='inline text-2xl mx-2' /></a>
            
        </div>
    </div>
  )
}

export default Footer