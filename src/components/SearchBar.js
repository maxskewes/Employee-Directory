import React from "react";
import "../css/searchbar.css";

function SearchBar({ handleSearchChange }) {
  return (
    <div className="col-md-12 text-center">
    <div className="searchbox">
      <form className="form-inline" id>
        <input
          className="form-control searchboxInput"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => handleSearchChange(e)}
        />
      </form>
    </div>
    </div>

  );
}
export default SearchBar;
