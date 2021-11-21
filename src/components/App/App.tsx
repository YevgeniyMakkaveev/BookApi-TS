import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchResult from "../Pages/Search";
import SingleBook from "../Pages/SingleBook";
import { useSelector } from "react-redux";
import Head from "../Head";
import Loader from "../Loader";
import IReducerState from "../../types/globalState";
import classes from "./App.module.scss";

const App: React.FC = () => {
  const loaderSingleBook=useSelector((state:IReducerState)=>state.singleBook.loading)
   const loaderSearch=useSelector((state:IReducerState)=>state.books.loading)
  return (
    <div className={classes.app}>
      <Head />
      {(loaderSearch||loaderSingleBook)&&<Loader/>}
      <Routes>
        <Route path="/" element={<SearchResult />} />
        <Route path="/book/:id" element={<SingleBook />} />
      </Routes>
    </div>
  );
};

export default App;
