import React, { Suspense } from "react";
import { Route } from 'react-router';
import './App.css';
import { Header } from './components/Header/Header';
import { FavoriteContainer } from './containers/FavoriteContainer/FavoriteContainer';
//import FilmPageContainer from './containers/FilmPageContainer/FilmPageContainer';
import { PopularContainer } from './containers/PopularContainer/PopularContainer';
const FilmPageContainer = React.lazy(() => import('./containers/FilmPageContainer/FilmPageContainer'));

function App() {
  return (
    <>
      <Header/>
      <Suspense fallback={<div>Loading</div>} >
        <Route path="/filmpage/:movieId" render = {() => <FilmPageContainer />} />
      </Suspense>
      <div className="container" >
        <Route path="/" exact render = {() => <PopularContainer />} />
        <Route path="/favorite" render = {() => <FavoriteContainer />} />
      </div>
    </>
  );
}

export default App;
