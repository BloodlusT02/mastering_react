import React from 'react'
import { Link } from 'react-router-dom'

const MainDice = ({ toggle }) => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div>
        <img src="images/dices_logo.png" alt="" />
      </div>
      <div className="relative">
        <h1 className='text-8xl font-bold uppercase'>Dice Game</h1>
        <button onClick={toggle} className='bg-black text-white px-16 py-1 border-2 transition rounded absolute right-2 hover:bg-white hover:text-black hover:border-2 border-black ease-in-out'>Play Now</button>
      </div>
    </div>
  )
}

export default MainDice
