import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
   

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };


  return (
    <div>
      <div className="text-center my-8">
        <input
          value={searchQuery}
          onChange={handleSearchQuery}
          type="text"
          placeholder="Search your product here"
          className="px-4 py-1 md:w-1/2 border-4 border-slate-950 rounded-md outline-none text-black"
        />
      </div>
      <Cards source="products" searchQuery={searchQuery} />
    </div>
  );
};

export default Products;
