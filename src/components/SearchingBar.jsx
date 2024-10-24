/* import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";

export default function Search() {

  const [query,setQuery] = useState('');
  const history = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate  (`/?search=${query}`);
  }
  return (
    <>
      <div className="container mx-auto px-6 py-3">
        <div className="relative mt-6 max-w-lg mx-auto">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <form onSubmit={handleSearch}>
          <input
            className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
          />
          <button type="submit">Buscar</button>
          </form>
          
        </div>
      </div>
    </>
  );
}
 */

import React from 'react';

const SearchBar = ({ searchValue, setSearchValue }) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Search cities..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default SearchBar;