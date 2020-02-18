const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
];

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_COMPLETED":
      const newState = [...state];
      const task = newState.find(({id}) => id === action.id);
      task.completed = !task.completed;
      return newState;
    case "CLEAR_COMPLETED":
      return state.filter(({completed}) => !completed);
    case "ADD_TODO":
      return [...state, {id: new Date(), completed: false, item: action.item}];
    default:
      return state;
  }
}

export {reducer, initialState};
