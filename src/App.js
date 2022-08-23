import React from 'react';
import Row from './components/Row/Row';
import requests from './requests';

function App() {
  return (
  <>
  <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
  <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
  <Row title="Top Rated"/>
  <Row title="Action Movies"/>
  <Row title="Comedy Movies"/>
  <Row title="Horror Movies"/>
  <Row title="Romance Movies"/>
  <Row title="Documentaries"/>
  </>
  );
}

export default App;
