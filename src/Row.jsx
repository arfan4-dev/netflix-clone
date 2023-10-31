import React, { useEffect, useState } from 'react'
import './row.css'
import instance from './Axios'
function Row({fetchUrl,title,isLargeRow=false}) {
 const [movies,setMovies]= useState([]);
 
const base_Url='https://image.tmdb.org/t/p/original'
 useEffect(()=>{
  async function fetchData(){
    const request=await instance.get(fetchUrl);
    setMovies(request.data.results);
    return request;

  } 
  fetchData();
 },[fetchUrl])
  return (
    <div className='row'>
      <h2 className='title text-2xl font-semibold'>{title}</h2>
      <div className='row__posters'> 
      {
        movies.map((movie)=>(
          <img className={`row__poster ${isLargeRow && 'row__posterLarge'}`}  key={movie.id} 
          src={`${base_Url}${isLargeRow? movie.poster_path:movie.backdrop_path }`} alt={movie.name} />
         
        ))
      }

      </div>
      
    </div>
  )
}

export default Row