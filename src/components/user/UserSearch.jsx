import React from 'react'
import { useState } from 'react'

function UserSearch() {

  const [query, setQuery] = useState(""); 

  const userSearch = (e) =>{
    setQuery(e.target.value);
  }

  const submitSearch = (e) =>{
    e.preventDefault()
    if(query === ''){
      alert("Please enter something");

    }else{


      setQuery("");
    }
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-8'>
      <div className="">
    <div className="form-control ml-5 mr-5">
    <form onSubmit={submitSearch}>
          <div className="relative">
            <input type="text" value={query} onChange={userSearch} className="w-full pr-40 bg-gray-200 border-black input input-lg text-black" placeholder='Search' />
            <button type="submit" className="absolute top-0 right-0 rounded-l-none btn btn-lg w-32">
              Go
            </button>
          </div>
        </form>
    </div>
      </div>
    </div>
  )
}

export default UserSearch