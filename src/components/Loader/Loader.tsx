import React from "react";
import classes from './Loader.module.scss';

const Loader:React.FC = () =>  (
 <div className={classes.wrapper}>
    <div className={classes.spinner}>
      <div className={classes.inner}>
        <div />
        <div/>
        <div/>
        <div/>
      </div>
    </div>
    </div>
  );
;
export default Loader;