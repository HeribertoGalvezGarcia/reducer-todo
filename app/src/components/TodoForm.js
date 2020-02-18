import React, {useState} from 'react';

function TodoForm({dispatch}) {
  const [item, setItem] = useState("");

  return (
    <form>
      <label>
        <input type="text" placeholder="...todo" onChange={({target: {value}}) => setItem(value)} />
      </label>
      <input type="submit" onClick={e => {e.preventDefault(); dispatch({type: "ADD_TODO", item});}} value="Add Todo" />
      <input type="submit" onClick={e => {e.preventDefault(); dispatch({type: "CLEAR_COMPLETED"});}} value="Clear Completed" />
    </form>
  );
}

export default TodoForm;
