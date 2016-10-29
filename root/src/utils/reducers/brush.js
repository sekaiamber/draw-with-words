// brush
const defaultBrush = {
  text: 'Draw with words',
  minSize: 8,
  maxSize: 300,
  color: '#000000'
}

var brushReducer = function (state = defaultBrush, action) {

  switch (action.type) {
    case 'BRUSH_SET_TEXT':
      return {
        ...state,
        text: action.text
      }
    case 'BRUSH_SET_MINSIZE':
      return {
        ...state,
        minSize: action.minSize
      }
    case 'BRUSH_SET_MAXSIZE':
      return {
        ...state,
        maxSize: action.maxSize
      }
    case 'BRUSH_SET_COLOR':
      return {
        ...state,
        color: action.color
      }
    default:
      return state;
  }
}

export default brushReducer;