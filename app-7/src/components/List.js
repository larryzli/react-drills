import React from "react";
import Todo from "./Todo";

const List = ({ itemArr }) => {
  let list = itemArr.map((val, i) => <Todo item={val} key={i} />);
  return <div>{list}</div>;
};

export default List;
