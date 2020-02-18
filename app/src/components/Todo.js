import React from 'react';

function Todo({completed, dispatch, item, id, completeBy}) {
  return <p style={completed ? {textDecoration: 'line-through'} : {}} onClick={() => dispatch({type: "UPDATE_COMPLETED", id})}>{completeBy < id ? "OVERDUE" : ""} {item}</p>;
}

export default Todo;
