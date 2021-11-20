import React from "react";
import { useParams } from "react-router-dom";

const SingleBook:React.FC=()=>{
   const { id } = useParams();
 return <div> {id}</div>

 
}
export default SingleBook;