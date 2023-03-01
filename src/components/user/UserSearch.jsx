import React, { useEffect } from 'react'
import { useState } from 'react'

function UserSearch({ search, clear }) {
  
  const [query, setQuery] = useState(window.localStorage.getItem('query'));
  
    useEffect(()=>{
      if(window.localStorage.getItem('query') === "null")
        setQuery("")
      else
        setQuery(window.localStorage.getItem('query'));
    },[]);

  const userSearch = (e) => {
    setQuery(e.target.value);
  }

  const submitSearch = (e) => {
    e.preventDefault()
    if (query === '') {
      alert("Please enter something");
    } else {
      search(query);
      // setQuery("");
    }
  }

  const handleClear = () => {
    setQuery("");
    clear();
  }

  return (
    <div className='ml-5 mr-5 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-3 lg:mb-8 xl:mb-8 md:mb-8 '>
      <div className="">
        <div className="form-control">
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
      <div>
        <button className="btn btn-ghost btn-lg" onClick={handleClear}>Clear</button>
      </div>
    </div>
  )
}

export default UserSearch