import React from 'react'
import { useEffect, useState } from 'react'
import UserItem from './UserItem'
import UserSearch from './UserSearch'
import { InfinitySpin } from 'react-loader-spinner'

const endPoint = 'https://api.github.com';
const beforeOffSetPx = Math.round(window.innerHeight * 0.50) + 26; //percent before rendering new
// const beforeOffSetPx = 30; //px before rendering new
const initCards = 4*6;
const cards = 4*1;
const d = new Date();

function UserResults() {

  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [page, setPage] = useState(Math.round(initCards/cards))
  const [userQuery, setQuery] = useState("")
  const [firstSearch, setFS] = useState(true)
  const [time, setTime] = useState(-1000)

  useEffect(() => {
    if(window.localStorage.getItem('users') === null) 
      setUsers([]);
    else 
      setUsers(JSON.parse(window.localStorage.getItem('users')));
    // fetchUsers("krish")
    
    window.addEventListener("scroll", handleInfScroll);
    return () => window.removeEventListener("scroll", handleInfScroll);
  }, []);

  // useEffect(() => {
  //   if (users !== undefined)
  //     window.localStorage.setItem('users', JSON.stringify(users));
  // }, [users]);

  useEffect(() => {
    if(firstSearch === false) reFetchUsers();
  }, [page]);

  const handleInfScroll = async () => {
    try {
      window.removeEventListener("scroll", handleInfScroll);
      
      
      //   console.log("Total height :", document.documentElement.scrollHeight);
      // console.log("window height :", window.innerHeight);
      //   console.log("scroll height :", document.documentElement.scrollTop+window.innerHeight);
      // console.log(firstSearch);
      console.log(d.getMilliseconds()," millis ", time);
      if (document.documentElement.scrollTop + window.innerHeight + beforeOffSetPx
        > document.documentElement.scrollHeight) {
          
          setTimeout(()=>window.addEventListener("scroll", handleInfScroll),200);
        setTime(d.getMilliseconds());
        setPage((prev) => (prev+1));
        
        console.log("render page :",page);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const fetchUsers = async (name) => {
    setQuery(name);
    setLoading(true);
    // setPage(2);
    setFS(false);
    window.localStorage.setItem('query', name)

    // console.log(firstSearch)
    const response = await fetch(`${endPoint}/search/users?q=${name}&per_page=${initCards}&page=1`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_KEY}`
      }
    })
    const data = await response.json();
    // console.log(data);
    setUsers(data.items);
    window.localStorage.setItem('users', JSON.stringify(data.items));
    setLoading(false);
  }

  const reFetchUsers = async () => {
    // setLoading(true)
    const response = await fetch(`${endPoint}/search/users?q=${userQuery}&per_page=${cards}&page=${page}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_KEY}`
      }
    })
    const data = await response.json();
    // console.log(data);
    setUsers((prev) => [...prev, ...data.items])
    // setLoading(false);
  }

  const clearSearch = () => {
    setUsers([]);
    setQuery("");
  }

  if (!isLoading) {
    return (
      <>
        <UserSearch search={fetchUsers} clear={clearSearch} />
        <div className='m-5 pb-4 grid grid-cols-1 gap-3 lg:gap-8 xl:gap-8 md:gap-4 xl:grid-cols-4 lg:grid-cols-3 md-grid-cols-2'>
          {users && users.map((user) => {
            return (
              // <h3 className="text-2lg font-bold">{user.login}</h3>
              <UserItem login={user.login} avatar={user.avatar_url} key={user.login} />
            )
          })}
        </div>
      </>)
  } else {
    return (
      <div className="flex-1 flex justify-center items-center font-bold mb-20">
        {/* <img src={LoadingAnim} width="80px" alt="Loading..." /> */}
        <InfinitySpin
          // width='150'testing done
          color="#4fa94d"
        />
      </div>
    )
  }
}

export default UserResults