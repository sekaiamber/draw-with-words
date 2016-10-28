const React = require('react');

export default class RangeItem extends React.Component {
  render() {
    return (
      <div className="console-item range">
        <div>{this.props.text}</div>
        <div><input type="text" value={this.props.value} onChange={this.props.onChange}/></div>
      </div>
    )
  }
}
