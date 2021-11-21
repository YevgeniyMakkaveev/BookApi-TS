import React,{useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchSingleBook } from "../../../store/SingleBookSlicer";
import Error from "../../Error";
import BookView from "../../BookView";
import IReducerState from "../../../types/globalState";
import classes from './SingleBook.module.scss'


const SingleBook:React.FC=()=>{
   const { id } = useParams();
   const navigate=useNavigate()
   const dispatch=useDispatch();
 const data = useSelector((state:IReducerState ) => state.singleBook.data);
 const error = useSelector((state:IReducerState ) => state.singleBook.errorMsg);
 const bookId = useSelector((state:IReducerState ) => state.singleBook.id);
 
   useEffect(() => {
    if ((!data || bookId !== id)&&id&&!error) dispatch(fetchSingleBook({id:id}));
  }, [data,bookId,dispatch,id,error]);


 return <div className={classes.singleBook}> <button className={classes.btn} onClick={()=>navigate('/')}> ←Back</button> 
 {error&& <Error error={error} />}
 {data&& <BookView key={data.title} {...data} />} </div>

 
}
export default SingleBook;