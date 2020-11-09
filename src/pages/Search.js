import React from "react";
import "./Search.css";

function Search() {
  return (
    <div class="container-fluid">
      <div class="row">
        <form>
          <input
            type="text"
            className="input1"
            name="search"
            placeholder="Search.."
          />
        </form>
      </div>
    </div>
  );
}

export default Search;
