import React from 'react'
import notFound from '../images/notFound.png';
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container m-auto flex justify-center">
      <div className="">
        <img src={notFound} alt="Not found" className='' ></img>

        <div className="flex-1">
          <div className="flex justify-center mt-5">
            <Link to='/' className="btn btn-primary btn-lg">
              <FaHome className="mr-2" /> Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound