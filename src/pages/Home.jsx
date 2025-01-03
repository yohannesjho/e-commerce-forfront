import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'

const Home = ({products}) => {
    
    
    const [sucess, setSuccess ] = useState(false)
    const [ error, setError ] = useState(null)

   
    return (
        <div>
            <div className='bg-gray-800 h-48 text-white flex justify-center items-center'>
                <div className='space-y-2'>
                    <h2 className='text-2xl md:text-5xl font-bold text-center'>Shop now</h2>
                    <p className='md:text-2xl font-semibold text-center'>your stop-one shopping center</p>
                </div>
            </div>
            <Cards products={products} />
        </div>
    )
}

export default Home