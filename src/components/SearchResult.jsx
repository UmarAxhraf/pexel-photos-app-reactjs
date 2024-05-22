import React, { useEffect, useState } from "react";
import Main from "./Main";
import axios from "axios";
import Header from "./Header";

const querieslist = ["nature", "car", "dark", "code", "human", "crypto"];

const handleSearch = () => {
  return querieslist[Math.floor(Math.random() * querieslist.length)];
};

const SearchResult = () => {
  const [query, setQuery] = useState(() => handleSearch());
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  //const [searchQuery, setSearchQuery] = useState("");

  // const randomval = querieslist[Math.floor(Math.random() * querieslist.length)];
  // console.log(randomval);
  // setQuery(randomval);

  // const handleSearchResult = () => {
  //   const randSearch = handleSearch();
  //   console.log(randSearch);
  //   setQuery(randSearch);
  // };

  const handleOpen = () => {
    setOpen(!open);
  };

  const getPhotos = () => {
    setLoading(true);
    const Access_Key = "YOUR-API-KEY";
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${Access_Key}&per_page=30`
      )
      .then((resp) => {
        //console.log(resp);
        setData(resp.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  // const getPhotos = () => {
  //   setLoading(true);
  //   axios
  //     .get(`https://api.pexels.com/v1/search?query=${query}&per_page=80`, {
  //       headers: {
  //         Authorization: process.env.APP_ACCESS_KEY,
  //       },
  //     })
  //     .then((resp) => {
  //       setData(resp.data.photos);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // };

  useEffect(() => {
    getPhotos();
    setQuery("");
  }, []);

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      getPhotos();
      setQuery("");
    }
  };

  const setInputValue = () => {
    setQuery("");
  };

  const forestQuery = () => {
    setQuery("forest");
    getPhotos();
    //setInputValue();
  };

  const carQuery = () => {
    setQuery("car");
    getPhotos();
  };

  return (
    <>
      <Header />
      <div className="backgimg">
        <p className="mainheadline">
          The best free stock photos, royalty free
          <br /> images & videos shared by creators.
        </p>
        <div>
          <input
            className="inp inpbacksvg"
            type="text"
            name="item"
            onKeyDown={onKeyDownHandler}
            placeholder="Search For Free Photos"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          ></input>
          <button
            className="button2"
            id="btn1"
            type="submit"
            onClick={() => {
              getPhotos();
              setInputValue();
            }}
          >
            Search
          </button>
        </div>
        {/* <div className="trendsearches">Input is {query}</div> */}
        <div className="trendsearches">
          <p className="trends1">Trending:&nbsp;</p>
          <p>
            <button className="buttontrend" onClick={forestQuery}>
              forest,
            </button>
            &nbsp;
            <button className="buttontrend" onClick={carQuery}>
              car,
            </button>
            &nbsp;
            <button className="buttontrend">nature,</button>&nbsp;
            <button className="buttontrend">code,</button>&nbsp;
            <button className="buttontrend">dark</button>&nbsp;
            <button className="buttontrend">...</button>
          </p>
        </div>
        <div className="herointro">
          <p>Made with ❤️ by Umar Ashraf</p>
        </div>
      </div>
      <Main />
      <div className="resultscontainer">
        <div className="reshead">
          <h1>Free Stock Photos</h1>
          <div className="dropdown">
            <button className="buttonres" onClick={handleOpen}>
              Trending➤
            </button>
            {open ? (
              <ul className="menu">
                <li>
                  <button>Trending ✔</button>
                </li>
                <li>
                  <button>New</button>
                </li>
                <li>
                  <button>Following</button>
                </li>
              </ul>
            ) : null}
          </div>
        </div>

        <div className="display_images">
          {/* <img
            src="https://c4.wallpaperflare.com/wallpaper/635/311/686/house-modern-luxury-architecture-mansions-hd-wallpaper-preview.jpg"
            alt="image_"
          />
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/942/595/desktop-wallpaper-38-android-nature-vertical-nature-thumbnail.jpg"
            alt="image_"
          />
          <img
            src="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
            alt="image_"
          />
          <img
            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
            alt="image_"
          />
          <img
            src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg"
            alt="image_"
          />
          <img
            src="https://i.pinimg.com/originals/9d/bb/7b/9dbb7b1fee6b77fcfd20cb2b9023701f.jpg"
            alt="image_"
          /> */}

          {!loading &&
            data &&
            data?.map((item) => {
              return (
                <div key={item.id}>
                  {/* <img src={item.src.medium} alt={item.alt} /> */}
                  <img src={item.urls.raw} alt={item.alt_description} />
                </div>
              );
            })}
          {loading && <div className="lds-hourglass"></div>}
        </div>
      </div>
      <div className="imgdata"></div>
    </>
  );
};

export default SearchResult;
