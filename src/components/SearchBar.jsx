// import SearchIcon from "./SearchIcon";

import { useState } from "react";

const SearchBar = ({handleSearch}) => {
  const [term,setTerm] = useState('');
  const searchEventHandler = ()=>{
    handleSearch(term)
    console.log('clicked')
  }
  return (
    <>
    <div className="search-container">
        <input className="search-input" type="text" placeholder="Search for your favorite movie..." value={term} onChange={(e)=>{setTerm(e.target.value)}} />
        <button onClick={searchEventHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>
        </button>
    </div>
    </>
  )
}

export default SearchBar;