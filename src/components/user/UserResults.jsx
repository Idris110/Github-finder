import React from 'react'
import { useEffect, useState } from 'react'
import LoadingAnim from '../layout/assets/loading.gif'
import UserItem from './UserItem'
import UserSearch from './UserSearch'

const endPoint = 'https://api.github.com'

function UserResults() {

  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setUsers(JSON.parse(window.localStorage.getItem('users')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('users',JSON.stringify(users));
  }, [users]);
  
  const fetchUsers = async (e) => {
    setLoading(true)
    const response = await fetch(`${endPoint}/search/users?q=${e}`, {
      headers: {
        Authorization: `token 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`
        // Authorization: `token ${process.env.KEY}`
      }
    })
    const data = await response.json();
    // console.log(data);
    setUsers(data.items)
  }
  
  const searchUsers = (e) =>{
    // console.log(e);
    fetchUsers(e);
    setLoading(false)
  }

  const clearSearch = () =>{
    setUsers([]);
  }

  if(!isLoading){
    return (
      <>
      <UserSearch search={searchUsers} clear={clearSearch}/>
      <div className='m-5 pb-4 grid grid-cols-1 gap-3 lg:gap-8 xl:gap-8 md:gap-4 xl:grid-cols-4 lg:grid-cols-3 md-grid-cols-2'>
        {users && users.map((user)=>{
          return(
            // <h3 className="text-2lg font-bold">{user.login}</h3>
            <UserItem login= {user.login} avatar={user.avatar_url} key={user.login}/>
          )
        } )}
      </div>
      </>)
  }else{
    return(
      <div className="flex-1 flex justify-center items-center font-bold mb-20">
        <img src={LoadingAnim} width="80px" alt="Loading..." />
      </div>
    )
  }
}

export default UserResults