import React from "react";
import classes from "./Error.module.scss";
interface IError {
  error: string;
}

const ErrorGlobal: React.FC<IError> = ({ error }) => (
  <div className={classes.error}>
    <h2 className={classes.red}> Произошла ошибка {error}</h2>
    <h2> Обновите приложение</h2>
  </div>
);
export default ErrorGlobal;
