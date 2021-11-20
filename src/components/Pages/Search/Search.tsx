import React from "react";
import { useSelector } from "react-redux";

import BookPreview from "../../BookPreview/BookPreview";
import classes from './Search.module.scss'
import IBookPreview from '../../../types/bookPreview';
const SearchResult:React.FC=()=>{
  const data:IBookPreview[] = useSelector((state:any) => state.books.books);

return (<div className={classes.cardNest}>
{data.map(el=><BookPreview key={el.volumeInfo.title+`${Math.random()}`} {...el} />)}
</div>)
}
export default SearchResult