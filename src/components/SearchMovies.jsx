import React, { useState } from 'react';
import Search from "../assets/Search.svg";

function SearchMovies({ onSearchTerms }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearchTerms(query);
  };

  return (

    <div className="search border-2 border-[#D1D5DB] w-[525px] flex items-center px-[10px]">
    <input
      type="text"
      className="w-full outline-none text-white  py-[6px] px-[10px] placeholder-[#fff] bg-transparent"
      placeholder="What do you want to watch?"
      value={query}
      onChange={handleInputChange}
    />
    <button onClick={handleSearch}>
      <img src={Search} alt="" />
    </button>
  </div>


   
  );
}

export default SearchMovies;
