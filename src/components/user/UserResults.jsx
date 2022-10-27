import React from 'react'
import { useEffect, useState } from 'react'

const endPoint = 'https://api.github.com'

function UserResults() {

  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`${endPoint}/users`, {
      headers: {
        Authorization: `token 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`
        // Authorization: `token ${process.env.KEY}`
      }
    })

    const data = await response.json();
    // console.log(data);
    setUsers(data)
  }

  return (
    <div className='mt-15 grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md-grid-cols-2'>
      {users.map((user)=>{
        return(
          <h3 className="text-2lg font-bold">{user.login}</h3>
        )
      } )}
    </div>
  )
}

export default UserResults