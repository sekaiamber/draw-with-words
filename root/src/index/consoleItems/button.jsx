const React = require('react');

export default class ButtonItem extends React.Component {
  render() {
    return (
      <div className="console-item button" onClick={this.props.onClick}>
        <div className="text">{this.props.text}</div>
      </div>
    )
  }
}
