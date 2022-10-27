import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Navbar({ title }) {
  return (
    <nav className="navbar bg-neutral mb-12 shadow-lg text-white">
      <div className="container mx-auto">
        <div className="flex-none mx-2 px-2">
          <FaGithub className='inline pr-2 mr-1 pb-1 text-4xl' />
          <Link to='/' className="text-lg font-bold">{title}</Link>
        </div>

        <div className="flex-1">
          <div className="flex justify-end">
            <Link to='/' className="btn bn-ghost btn-sm-rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn bn-ghost btn-sm-rounded-btn">About</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder'
}

export default Navbar