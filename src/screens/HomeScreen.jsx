import React from "react";
import "./homeScreen.css";
import Nav from "../Nav";
import Row from "../Row";
import Banner from "../Banner";
import requests from "../Request";
const HomeScreen = () => {
  return (
    <div>
      {/* Navbar */}
      <Nav />
     

      {/* Banner */}

      <Banner />
      {/* Row */}
{/*  */}
      <Row 
      
      fetchUrl={requests.fetchTrending}
      isLargeRow
      title='Trending Now'
      />

<Row 
      fetchUrl={requests.fetchTopRated}
      title='Top Rated'
      />
      <Row 
      fetchUrl={requests.fetchActionMovies}
      title='Action Movies'
      />
      <Row 
      fetchUrl={requests.fetchComedyMovies}
      title='Comedy Movies'
      />
      <Row 
      fetchUrl={requests.fetchHorrorMovies}
      title='Horror Movies'
      />
      <Row 
      fetchUrl={requests.fetchRomanceMovies}
      title='Romance Movies'
      />
      <Row 
      fetchUrl={requests.fetchDocumentaries}
      title='Documentaries'
      />
    </div>
  );
};

export default HomeScreen;
