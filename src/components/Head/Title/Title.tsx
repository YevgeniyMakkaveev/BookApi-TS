import React from "react";
import classes from './Title.module.scss'
const Title: React.FC = () => (
  <>
    <a
      rel="noreferrer"
      className={classes.link}
      target="_blank"
      href="https://github.com/YevgeniyMakkaveev"
    >
      made by Yevgeny Makkaveev
    </a>
    <div className={classes.headTitle}>
      <h1> BOOK-API 3</h1>
    </div>
  </>
);

export default Title