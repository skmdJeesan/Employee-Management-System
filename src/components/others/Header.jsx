import React, { useEffect, useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = ({changeUser, data}) => {
  const [username, setUsername] = useState("")
  
  useEffect(() => {
    if(!data) setUsername('Admin')
    else setUsername(data.name)
  }, [data])
  
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    changeUser('')
    //window.location.reload()
  }

  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-xl font-medium text-white'>Hello <br /> <span className='text-3xl font-bold'>{username}👋</span></h1>
      <button onClick={logOutUser} className='bg-red-500 px-4 py-1 rounded-xl text-white text-lg font-medium hover:bg-red-700 active:scale-95 transition-transform cursor-pointer'>Log out</button>
    </div>
  )
}

export default Header
