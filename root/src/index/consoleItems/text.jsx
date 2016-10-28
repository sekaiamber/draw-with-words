const React = require('react');

export default class TextItem extends React.Component {
  render() {
    return (
      <div className="console-item text">
        <div>{this.props.text}</div>
        <div><input type="text" value={this.props.value} onChange={this.props.onChange}/></div>
      </div>
    )
  }
}
