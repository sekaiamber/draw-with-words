const React = require('react');
import actionCreators from './../utils/actionCreator'
const actionCreator = actionCreators.brush;

import TextItem from './consoleItems/text'
import RangeItem from './consoleItems/range'
import ColorItem from './consoleItems/color'
import ButtonItem from './consoleItems/button'
require('./console.scss')

export default class Console extends React.Component {
  onTextChange(e) {
    this.props.dispatch(actionCreator.setTextActionCreator(e.target.value));
  }

  onMinSizeChange(num) {
    this.props.dispatch(actionCreator.setMinSizeActionCreator(num));
  }

  onMaxSizeChange(num) {
    this.props.dispatch(actionCreator.setMaxSizeActionCreator(num));
  }

  onColorChange(color) {
    this.props.dispatch(actionCreator.setColorActionCreator(color));
  }

  onTriggerConsoleClick() {
    this.props.dispatch({
      type: 'BRUSH_TRIGGER_CONSOLE'
    })
  }

  render() {
    return (
      <div className={this.props.consoleHidden ? "console console-hidden" : "console"}>
        <div className="console-opt">
          <TextItem text="Text" value={this.props.text} onChange={this.onTextChange.bind(this)}/>
          <RangeItem text="Min Size" value={this.props.minSize} onChange={this.onMinSizeChange.bind(this)} minValue={1} maxValue={100}/>
          <RangeItem text="Max Size" value={this.props.maxSize} onChange={this.onMaxSizeChange.bind(this)} minValue={1} maxValue={400}/>
          <ColorItem text="Text Color" value={this.props.color} onChange={this.onColorChange.bind(this)}/>
          <ButtonItem text="Clear" onClick={this.props.onClearClick}/>
          <ButtonItem text="Save" onClick={this.props.onSaveClick}/>
        </div>
        <ButtonItem text={this.props.consoleHidden ? "Open Console" : "Close Console"} onClick={this.onTriggerConsoleClick.bind(this)}/>
      </div>
    )
  }
}
