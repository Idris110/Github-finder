import React from 'react'
import { Link } from 'react-router-dom'

function UserItem({login, avatar}) {

    const cap = (string) => (string.charAt(0).toUpperCase() + string.slice(1))

  return (
    <div className='card shadow-md compact side bg-base-11 hover:shadow-xl'>
        <div className="flex-row items-center space-x-4 card-body">
            <div className="shadow w-14 h-14">
                <img className='rounded-full' src={avatar} alt="" />
            </div>
            {/* <div className="card-title"> {cap(login)}</div> */}
            <Link className="card-title" to={`users/${login}`}> {cap(login)}
            
            </Link>

        </div>
    </div>
  )
}

export default UserItem