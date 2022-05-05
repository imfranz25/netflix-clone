import React from "react";
// COMPONENTS
import Row from "./../components/Row";
import Banner from "./../components/Banner";
import Nav from "./../components/Nav";
// API OBJECT REQUESTS (E.G fetchNetflixOriginals) -> Original Movies of Netflix
import requests from "./../api/request";

function Dashboard() {
  return (
    <>
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </>
  );
}

export default Dashboard;