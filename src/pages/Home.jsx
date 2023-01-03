import React from 'react'
import UserResults from '../components/user/UserResults'
import UserSearch from '../components/user/UserSearch'

function Home() {


  return (
    <div>
      <UserSearch/>
      <UserResults/>
    </div>
  )
}

export default Home