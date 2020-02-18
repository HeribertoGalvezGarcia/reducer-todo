import React, {useReducer} from 'react';
import {initialState, reducer} from "./reducers/reducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList items={state} dispatch={dispatch} />
      <TodoForm dispatch={dispatch} />
    </div>
  );
}

export default App;
