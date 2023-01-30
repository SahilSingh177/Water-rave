import React from "react";
import "./Search.css";

export default function Search() {
  return (
      <>
      <div id="form-cont">
        <form action="" class="search-bar" id="search-bar">
          <input type="search" name="search" pattern=".*\S.*" required />
          <button class="search-btn" type="submit">
            <span>Search</span>
          </button>
        </form>
      </div>
    </>
  );
}
