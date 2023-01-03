import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Navbar({ title }) {

  const changeTheme = (e)=>
  {
    let theme = e.target.value.toLowerCase();
    document.getElementsByTagName("html")[0].setAttribute("data-theme",theme);
    // console.log(theme);
  }

  return (
    <nav className="navbar bg-neutral mb-12 shadow-lg text-white">
      <div className="container mx-auto">
        <div className="flex-none mx-2 px-2">
          <FaGithub className='inline pr-2 mr-1 pb-1 text-4xl' />
          <Link to='/' className="text-lg font-bold">{title}</Link>
        </div>

        <div className="flex-1">
          <div className="flex justify-end">
            {/* <Link to='/' className="btn bn-ghost btn-sm-rounded-btn">
              Home
            </Link> */}
            <Link to="/about" className="btn bn-ghost btn-sm-rounded-btn pr-2 lg:pr-5">About</Link>
            <select onChange={changeTheme} className="btn btn-sm-rounded-btn w-[6rem] h-1 pr-1 lg:pr-5 lg:w-[8rem] lg:pl-1 xl:pr-5 xl:w-[8rem] xl:pl-1">
                <option>Dark</option>
                <option>Night</option>
                <option>Light</option>
                <option>synthwave</option>
                <option>Retro</option>
                <option>Cyberpunk</option>
                <option>Valentine</option>
                <option>Coffee</option>
            </select>
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