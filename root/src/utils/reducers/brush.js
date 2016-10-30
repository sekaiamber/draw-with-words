// brush
const defaultBrush = {
  text: 'Draw with words',
  textIndex: 0,
  minSize: 8,
  maxSize: 300,
  color: '#000000',
  consoleHidden: false
}

var brushReducer = function (state = defaultBrush, action) {

  switch (action.type) {
    case 'BRUSH_SET_TEXT':
      return {
        ...state,
        text: action.text,
        textIndex: 0
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
    case 'BRUSH_ADD_TEXTINDEX':
      return {
        ...state,
        textIndex: state.text.length - 1 == state.textIndex ? 0 : state.textIndex + 1
      }
    case 'BRUSH_TRIGGER_CONSOLE':
      return {
        ...state,
        consoleHidden: !state.consoleHidden
      }
    default:
      return state;
  }
}

export default brushReducer;