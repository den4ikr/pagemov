import React from "react";
import { Route } from "react-router";
import "./App.css";
import { Header } from "./components/Header/Header";
import { FavoriteContainer } from "./containers/FavoriteContainer/FavoriteContainer";
import { PopularContainer } from "./containers/PopularContainer/PopularContainer";
import FilmPageContainer from "./containers/FilmPageContainer/FilmPageContainer";

function App() {
  return (
    <>
      <Header />
      <Route path="/filmpage/:movieId" render={() => <FilmPageContainer />} />
      <div className="container">
        <Route path="/moviepatapp" render={() => <PopularContainer />} />
        <Route path="/favorite" render={() => <FavoriteContainer />} />
      </div>
    </>
  );
}

export default App;
