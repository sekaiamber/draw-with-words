var setTextActionCreator = function (text) {
  return {
    type: 'BRUSH_SET_TEXT',
    text: text
  }
}

var setMinSizeActionCreator = function (size) {
  return {
    type: 'BRUSH_SET_MINSIZE',
    minSize: size
  }
}

var setMaxSizeActionCreator = function (size) {
  return {
    type: 'BRUSH_SET_MAXSIZE',
    maxSize: size
  }
}

var setColorActionCreator = function (color) {
  return {
    type: 'BRUSH_SET_COLOR',
    color: color
  }
}

var setTextActionCreatorAsync = function (text) {
  return (dispatch) => {
    setTimeout(function () {
      dispatch({
        type: 'BRUSH_SET_TEXT',
        text: text
      })
    }, 2000)
  } 
}

export default {
  setTextActionCreator,
  setTextActionCreatorAsync,
  setMinSizeActionCreator,
  setMaxSizeActionCreator,
  setColorActionCreator
}