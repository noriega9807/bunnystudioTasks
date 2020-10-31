const usersReducerDefaultState = [];

export default (state = usersReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        action.user
      ];
    case 'REMOVE_USER':
      return state.filter(({ _id }) => _id !== action.id);
    case 'EDIT_USER':
      return state.map((user) => {
        if (user._id === action.id) {
          return {
            ...user,
            ...action.updates
          };
        } else {
          return user;
        };
      });
    case 'SET_USERS':
      return action.users;
    default:
      return state;
  }
};