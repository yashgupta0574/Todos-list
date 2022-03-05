import React from "react";
import { TodoItem } from "./TodoItem";
//import PropTypes from "prop-types";

export const Todos = (props) => {
  return (
    <div>
      <TodoItem todo={props.todos[0]} />
    </div>
  );
};
