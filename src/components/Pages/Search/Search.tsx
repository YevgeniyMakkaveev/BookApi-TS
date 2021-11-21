import React from "react";
import { useSelector,useDispatch } from "react-redux";

import BookPreview from "../../BookPreview/BookPreview";
import classes from "./Search.module.scss";
import IBookPreview from "../../../types/bookPreview";
import IReducerState from "../../../types/globalState";
import { fetchMoreBooks } from "../../../store/BooksSlice";
import Error from "../../Error";

const SearchResult: React.FC = () => {
  const data: IBookPreview[] = useSelector((state: IReducerState) => state.books.books);
  const error: string|null = useSelector((state: IReducerState) => state.books.errorMsg);
  const dispatch=useDispatch();

  return (
    <div className={classes.singleBook}>
    <div className={classes.cardNest}>
      {error&&<Error error={error} />}
      {!error&&data[0]&&data.map((el) => (
        <BookPreview key={el.volumeInfo.title + `${Math.random()}`} {...el} />
      ))}
    </div>
   {data[0]&& <button className={classes.btn} onClick={()=>dispatch(fetchMoreBooks())}> Load More</button>}
    </div>
  );
};
export default SearchResult;
