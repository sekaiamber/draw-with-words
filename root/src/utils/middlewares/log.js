import _ from 'lodash'

var log = _.curry(
  ({dispatch, getState}, next, action) => {
    if (!action.type.startsWith('LOG')) {
      dispatch({
        type: 'LOG_PUSH',
        action: action
      });
    }
    next(action)
  }
);

export default log;