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
            {/* <SearchIcon/> */}
        </button>
    </div>
    </>
  )
}

export default SearchBar;