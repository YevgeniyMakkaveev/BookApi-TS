import React from "react";
import { useNavigate } from "react-router-dom";

import notTooMuch from "../../units/notTooMuch";
import IBookPreview from "../../types/bookPreview";
import getImage from "../../units/getImage";
import classes from './BookPreview.module.scss';

const BookPreview: React.FC<IBookPreview> = (props) => {
  console.log(props);
  const { id, volumeInfo } = props;
  const {
    authors,
    categories,
    description,
    imageLinks,
    publishedDate,
    publisher,
    title,
  } = volumeInfo;
 
  let navigate = useNavigate();

  return (
    <div className={classes.card} onClick={() => navigate(`/book/${id}`)}>
      <div className={classes.cardWrap}>
        <div className={classes.cardFront}>
        <div className={classes.frontLeft}>
          <img
            src={getImage(imageLinks, true)}
            alt={title}
          />
        </div>
        <div className={classes.frontRight}>
          <p className="card__category"> {categories?.[0] ?? "No category"}</p>
          <h3 className="card__title">{notTooMuch(title, 60)}</h3>
          <p className="card__authors"> {authors?.[0] ?? "No authors"}</p>
          <p className="card__publisher">
            {publisher} {publishedDate}
          </p>
        </div>
      </div>
      <div className={classes.cardBack} > {notTooMuch(description??'No description', 700)} </div>
      </div>
    </div>
  );
};
export default BookPreview;
