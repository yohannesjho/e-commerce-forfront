import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        console.log(query)
        setSearchQuery(query); // Update the search query state
      };

      console.log(searchQuery)

    return (
        <div className='flex flex-col min-h-screen'>
             <Header onSearch={handleSearch}/>
             <main className='flex-grow'> {React.cloneElement(children, { searchQuery })}</main>
             <Footer/>
        </div>
    )
}

export default Layout