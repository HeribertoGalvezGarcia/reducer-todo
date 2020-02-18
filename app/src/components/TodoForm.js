import React, {useState} from 'react';

function TodoForm({dispatch}) {
  const [item, setItem] = useState("");
  const [date, setDate] = useState(new Date());

  return (
    <form>
      <label>
        <input type="text" placeholder="...todo" onChange={({target: {value}}) => setItem(value)} />
      </label>
      <label>
        <input type="date" onChange={({target: {value}}) => setDate(new Date(value))} required />
      </label>
      <input type="submit" onClick={e => {e.preventDefault(); dispatch({type: "ADD_TODO", item, date});}} value="Add Todo" />
      <input type="submit" onClick={e => {e.preventDefault(); dispatch({type: "CLEAR_COMPLETED"});}} value="Clear Completed" />
    </form>
  );
}

export default TodoForm;
