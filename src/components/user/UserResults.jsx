import React from 'react'
import { useEffect, useState } from 'react'
import LoadingAnim from '../layout/assets/loading.gif'
import UserItem from './UserItem'

const endPoint = 'https://api.github.com'

function UserResults() {

  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
    setLoading(false)
  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`${endPoint}/users`, {
      headers: {
        Authorization: `token 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`
        // Authorization: `token ${process.env.KEY}`
      }
    })

    const data = await response.json();
    console.log(data);
    setUsers(data)
  }

  if(!isLoading){
    return (
      <div className='m-5 pb-4 grid grid-cols-1 gap-3 lg:gap-8 xl:gap-8 md:gap-4 xl:grid-cols-4 lg:grid-cols-3 md-grid-cols-2'>
        {users.map((user)=>{
          return(
            // <h3 className="text-2lg font-bold">{user.login}</h3>
            <UserItem login= {user.login} avatar={user.avatar_url}/>
          )
        } )}
      </div>
    )
  }else{
    return(
      <div className="flex-1 flex justify-center items-center font-bold">
        <img src={LoadingAnim} alt="Loading..." />
      </div>
    )
  }
}

export default UserResults