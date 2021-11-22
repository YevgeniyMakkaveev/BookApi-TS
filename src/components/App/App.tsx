import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import SearchResult from "../Pages/Search";
import SingleBook from "../Pages/SingleBook";
import NotFound from "../Pages/404/NotFound";
import Head from "../Head";
import Loader from "../Loader";
import IReducerState from "../../types/globalState";
import ErrorBoundry from "../errorBoundry";
import classes from "./App.module.scss";

const App: React.FC = () => {
  const loaderSingleBook = useSelector(
    (state: IReducerState) => state.singleBook.loading
  );
  const loaderSearch = useSelector(
    (state: IReducerState) => state.books.loading
  );
  return (
    <ErrorBoundry>
      <div className={classes.app}>
        <Head />
        {(loaderSearch || loaderSingleBook) && <Loader />}
        <Routes>
          <Route path="/" element={<SearchResult />} />
          <Route path="/book/:id" element={<SingleBook />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </ErrorBoundry>
  );
};

export default App;
