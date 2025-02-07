import React, { useState } from 'react'
import { BiCart, BiCross, BiMenu, BiUser, BiX } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/cartContext'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Header = () => {
  const [searchClicked, setSearchClicked] = useState(false)
  const { cartItems } = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const [open, setOpen] = useState(false)

  const handleSearchQuery = (e) => {

    setSearchQuery(e.target.value);

  };


  return (
    <header className='sticky top-0 z-50 bg-gray-500  text-white'>
      <div className='flex justify-between items-center px-2 py-2 md:px-8 md:py-6 '>
        <div>
          <a href='/' className='text-2xl font-bold '>
            E-commerce
          </a>
        </div>
        <nav className='hidden md:flex space-x-4'>
          <Link to='/' >Home</Link>
          <Link to='/products'  >Products</Link>
          <Link to='/about'>About</Link>
          <Link to='/contacts'>Contacts</Link>
        </nav>

        <div className='flex gap-4'>
          <div className='hidden'>

            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {/* <input value={searchQuery} onChange={handleSearchQuery} type='text' placeholder='search your product here' className={searchClicked ? `px-4 py-1 w-64 rounded-md outline-none text-black` : `hidden`} />
          <BsSearch className='cursor-pointer' onClick={() => setSearchClicked(!searchClicked)} /> */}

          <div className='md:hidden'>

            {
              open ? (
                <>
                  <div className='bg-orange-400 w-28 sm:w-48 text-black py-2 rounded-md'>
                    <BiX onClick={() => setOpen((prev) => !prev)} className='text-xl cursor-pointer ' />
                    <div className='ml-6 mr-2'>
                      <nav className='flex flex-col text-sm  '>
                        <Link to='/' >Home</Link>
                        <Link to='/products'  >Products</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contacts'>Contacts</Link>
                      </nav>
                      <Link to='/cart' className='flex items-center gap-1'><BiCart /><span>({cartItems.length})</span></Link>
                      <SignedOut>
                        <SignInButton />
                      </SignedOut>
                      <SignedIn>
                        <UserButton />
                      </SignedIn>
                    </div>
                  </div>
                </>
              ) : <BiMenu onClick={() => setOpen((prev) => !prev)} className='text-xl cursor-pointer md:hidden' />
            }
          </div>


          <Link to='/cart' className='hidden md:flex items-center gap-1'><BiCart /><span>({cartItems.length})</span></Link>
        </div>
      </div>
    </header>
  )
}

export default Header