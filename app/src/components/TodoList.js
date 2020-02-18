import React from 'react';
import Todo from "./Todo";

function TodoList({items, dispatch}) {
  return (
    <div>
      {items.map(item => <Todo key={item.id} {...item} dispatch={dispatch} />)}
    </div>
  );
}

export default TodoList;
