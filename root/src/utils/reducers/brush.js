// brush
const defaultBrush = {
  text: 'Draw with words'
}

var brushReducer = function (state = defaultBrush, action) {

  switch (action.type) {
    case 'BRUSH_SET_TEXT':
      return {
        ...state,
        text: action.text
      }

    default:
      return state;
  }
}

export default brushReducer;