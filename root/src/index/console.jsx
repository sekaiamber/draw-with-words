const React = require('react');

import actionCreators from './../utils/actionCreator'

const actionCreator = actionCreators.brush;

import TextItem from './consoleItems/text'

export default class Console extends React.Component {
  onTextChange(e) {
    this.props.dispatch(actionCreator.setTextActionCreator(e.target.value));
  }

  render() {
    return (
      <div className="console">
        <TextItem text="Text" value={this.props.text} onChange={this.onTextChange.bind(this)}/>
      </div>
    )
  }
}
