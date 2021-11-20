import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchResult from "../Pages/Search";
import SingleBook from "../Pages/SingleBook";
import Head from "../Head";

import classes from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <Head />
      <Routes>
        <Route path="/" element={<SearchResult />} />
        <Route path="/book/:id" element={<SingleBook />} />
      </Routes>
    </div>
  );
};

export default App;
