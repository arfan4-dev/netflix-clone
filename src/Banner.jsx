import React, { useEffect, useState } from "react";
import "./banner.css";
import instance from "./Axios";
import requests from "./Request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      console.log('request:',request)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      // console.log("movie inside",movie)
      return request;
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
// console.log('movie:',movie)
  return (
    <header
      className="banner sm:w-full"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        
      }} 
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(
            `${movie?.overview}`,
            150
          )}
        </h1>
      </div>

      {/* <div className="banner__fadeButton"></div> */}
    </header>
  );
};

export default Banner;
