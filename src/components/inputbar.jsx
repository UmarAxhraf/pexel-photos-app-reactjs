import React from "react";
//import { Link } from "react-router-dom";

const inputbar = () => {
  return (
    <div>
      <input
        className="lic-input lic-inp inpbacksvg"
        type="text"
        name="item"
        //onKeyDown={onKeyDownHandler}
        placeholder="Search For Free Photos"
        // onChange={(e) => setQuery(e.target.value)}
        // value={query}
      ></input>

      <button
        className="button2"
        id="btn1"
        type="submit"
        // onClick={() => {
        //   getPhotos();
        //  setInputValue();
        // }}
      >
        Search
      </button>
    </div>
  );
};

export default inputbar;
