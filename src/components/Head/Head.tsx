import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../store/BookSlicer";
import { fieldParam, searchParams } from "./fields";
import Selector from "./Selector";
import SearchBar from "./SearchBar";
import Title from "./Title";
import classes from './Head.module.scss'

const Head: React.FC = () => {
  const [text, setText] = useState("");
  const [field, setField] = useState("all");
  const [priority, setPriority] = useState("relevance");

  const dispatch = useDispatch();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.length <= 0) return;
    dispatch(
      fetchBooks({
        title: text.toLowerCase(),
        field: field,
        priority: priority,
      })
    );
    setText("");
    setField("all");
    setPriority("relevance");
  };

  return (
    <div className={classes.head}>
      <Title />
      <SearchBar text={text} setText={setText} onSubmit={onSubmit} />
      <div className={classes.selectors}>
      <Selector
        name="field"
        value={field}
        setValue={setField}
        data={fieldParam}
      />
      <Selector
        name="prioriy"
        value={priority}
        setValue={setPriority}
        data={searchParams}
      />
      </div>
    </div>
  );
};
export default Head;
