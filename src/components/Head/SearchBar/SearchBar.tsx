import React from "react";
import classes from './SearchBar.module.scss'

interface ISearch{
 text: string;
 setText: (value: React.SetStateAction<string>) => void;
 onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}
const SearchBar:React.FC<ISearch>=({ onSubmit, text, setText })=>{
 return (<>
      <form onSubmit={e=>onSubmit(e)}>
        <input
          className={classes.input}
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="What book do you need?"
        ></input>
        <button className={classes.btn}> SEARCH</button>
      </form>
    </>)
}
export default SearchBar