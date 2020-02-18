import React from 'react';

function Todo({completed, dispatch, item, id}) {
  return <p style={completed ? {textDecoration: 'line-through'} : {}} onClick={() => dispatch({type: "UPDATE_COMPLETED", id})}>{item}</p>;
}

export default Todo;
