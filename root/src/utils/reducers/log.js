var logReducer = function (state = [], action) {

  switch (action.type) {
    case 'LOG_PUSH':
      state.push(action.action);
      return state;
    // etc.
    default:
      return state;
  }
}

export default logReducer;