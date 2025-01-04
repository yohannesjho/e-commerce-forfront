import React, { useState } from 'react'
import { BiCart, BiUser } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = () => {
  const [searchClicked, setSearchClicked] = useState(false)


  return (
    <header className='bg-gray-500  text-white'>
      <div className='flex justify-between items-center px-8 py-6 '>
        <div>
          <a href='/' className='text-2xl font-bold '>
            E-commerce
          </a>
        </div>
        <nav className='hidden md:flex space-x-4'>
          <a href='/home'>Home</a>
          <a href='/products'>Products</a>
          <a href='/about'>About</a>
          <a href='/contact'>Contacts</a>
        </nav>
        <div className='flex space-x-4 items-center'>
          <input type='text' placeholder='search your product here' className={searchClicked ? `px-4 py-1 w-64 rounded-md outline-none text-black` : `hidden`} />
          <BsSearch className='cursor-pointer' onClick={() => setSearchClicked(!searchClicked)} />
          <BiUser />
          <Link to='/cart'><BiCart /></Link>
        </div>
      </div>
    </header>
  )
}

export default Header