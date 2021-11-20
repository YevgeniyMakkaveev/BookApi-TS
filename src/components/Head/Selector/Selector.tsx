import React from "react";
import classes from './Selector.module.scss'

interface ISelector {
  name: string;
  value: string;
  setValue: (value: React.SetStateAction<string>) => void;
  data: string[];
}

const Selector: React.FC<ISelector> = ({ name, value, setValue, data }) => {
  return (
    <div className={classes.selectorGroup} >
      <label >Choose {name}</label>
      <select
        id="field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {data.map((field) => (
          <option key={field} value={field}>
            {field}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
