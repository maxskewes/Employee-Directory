import React from "react";
import "../css/searchbar.css";

function SearchBar({ empSearch }) {
    return (
      <div className="searchBar">
        <form className="form-inline">
          <div className="form-group mb-5 mt-5">
            <label className="<label className="mr-3 text-light font-weight-bold>Search by Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="searchName"
              onChange={e => empSearch(e)}
            />
          </div>
        </form>
      </div>
    );
  }
  
  export default SearchBar;
