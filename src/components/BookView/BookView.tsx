import React from "react";
import IBookView from "../../types/bookView";
import getImage from "../../units/getImage";
import classes from "./BookView.module.scss";

const BookView: React.FC<IBookView> = (props) => {
  const {
    authors,
    categories,
    description,
    imageLinks,
    publishedDate,
    publisher,
    title,
    industryIdentifiers,
    pageCount,
  } = props;
  const mainText = description ? (
    <div
      dangerouslySetInnerHTML={{ __html: description }}
      className={classes.description}
    />
  ) : (
    <div className={description}>Description of the book is not found.</div>
  );
  return (
    <div className={classes.card}>
      <div className={classes.category}>
        {categories ? categories.join() : "No categories"}
      </div>

      <div className={classes.mainInfo}>
        <img src={getImage(imageLinks, false)} alt={title} />
        <div className={classes.infoList}>
          <h2 className={classes.title}> {title}</h2>
          <ul className={classes.list}>
            <li>
              <strong>Authors: </strong>
              {authors ? authors.join(" ") : "No authors"}
            </li>
            <li>
              <strong>Publisher:</strong>
              {publisher}
            </li>
            <li>
              <strong>Published date:</strong> {publishedDate}
            </li>
            <li>
              <strong>Pages:</strong> {pageCount}
            </li>
            <li>
              <strong>ID:</strong>{" "}
              {industryIdentifiers
                ? industryIdentifiers[0].type +
                  " " +
                  industryIdentifiers[0].identifier
                : "No ID"}
            </li>
          </ul>
        </div>
        <div className={classes.descriptionWrap}>{mainText}</div>
      </div>
    </div>
  );
};
export default BookView;
