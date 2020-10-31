const tasksReducerDefaultState = [];

export default (state = tasksReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        action.task
      ];
    case 'REMOVE_TASK':
      return state.filter(({ _id }) => _id !== action.id);
    case 'REMOVE_ALL_USER_TASK':
      return state.filter(({ user_id }) => user_id !== action.user_id);
    case 'EDIT_TASK':
      return state.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            ...action.updates
          };
        } else {
          return task;
        };
      });
    case 'SET_TASKS':
      return action.tasks;
    default:
      return state;
  }
};