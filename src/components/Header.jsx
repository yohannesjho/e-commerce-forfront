import React, { useState } from 'react'
import { BiCart, BiUser } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/cartContext'

const Header = ( ) => {
  const [searchClicked, setSearchClicked] = useState(false)
  const { cartItems } = useCart()
  const [searchQuery, setSearchQuery ] = useState('')
 
  const handleSearchQuery = (e) => {

    setSearchQuery(e.target.value);
   
  };

  
  return (
    <header className='sticky top-0 z-50 bg-gray-500  text-white'>
      <div className='flex justify-between items-center px-8 py-6 '>
        <div>
          <a href='/' className='text-2xl font-bold '>
            E-commerce
          </a>
        </div>
        <nav className='hidden md:flex space-x-4'>
          <a href='/'>Home</a>
          <a href='/products'>Products</a>
          <a href='/about'>About</a>
          <a href='/contact'>Contacts</a>
        </nav>
        <div className='flex space-x-4 items-center'>
          <input value={searchQuery} onChange={handleSearchQuery} type='text' placeholder='search your product here' className={searchClicked ? `px-4 py-1 w-64 rounded-md outline-none text-black` : `hidden`} />
          <BsSearch className='cursor-pointer' onClick={() => setSearchClicked(!searchClicked)} />
          <BiUser />
          <Link to='/cart' className='flex items-center gap-1'><BiCart /><span>({cartItems.length})</span></Link>
        </div>
      </div>
    </header>
  )
}

export default Header