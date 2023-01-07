import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { json, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar({ title }) {

  const [theme, setTheme] = useState("dark");

  useEffect(()=>(
    setTheme(JSON.parse(window.localStorage.getItem("theme")))
  ),[])

  useEffect(()=>{
    window.localStorage.setItem("theme", JSON.stringify(theme))
    document.getElementsByTagName("html")[0].setAttribute("data-theme",theme);
},[theme])
  

  const changeTheme = (e)=>
  {
    setTheme(e.target.value);
    // console.log(theme);
  }

  return (
    <nav className="navbar bg-neutral mb-7 shadow-lg text-white">
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
            <Link to="/about" className="btn bn-ghost btn-sm-rounded-btn pr-3 lg:pr-5">About</Link>
            <select onChange={changeTheme} value={theme} className="btn btn-sm-rounded-btn w-[6rem] h-1 pr-1 lg:pr-5 lg:w-[8rem] lg:pl-1 xl:pr-5 xl:w-[8rem] xl:pl-1">
                <option>dark</option>
                <option>night</option>
                <option>light</option>
                <option>synthwave</option>
                <option>retro</option>
                <option>cyberpunk</option>
                <option>valentine</option>
                <option>coffee</option>
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