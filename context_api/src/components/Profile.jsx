import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    const {user} = useContext(UserContext)

    if(!user) return <div className='text-white text-center'>Please Login</div>
    return <div className='text-white text-center'>Welcome <strong>{user.username}</strong> <br /> Your have log into your account successfully</div>
  
}

export default Profile
