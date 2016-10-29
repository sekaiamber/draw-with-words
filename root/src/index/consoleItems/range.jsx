const React = require('react');
import $ from 'jquery'

export default class RangeItem extends React.Component {
  componentDidMount() {
    this.$range = $(this.range);
    this.mouseDown = false;
  }
  handleMouseDown(e) {
    this.mouseDown = true;
  }
  handleMouseMove(e) {
    if (this.mouseDown) {
      let diff = e.clientX - this.$range.offset().left;
      let num = Math.round(diff / this.$range.innerWidth() * (this.props.maxValue - this.props.minValue) + this.props.minValue);
      this.props.onChange(num);
    }
    e.preventDefault();
  }
  render() {
    let range = (this.props.value - this.props.minValue) / (this.props.maxValue - this.props.minValue) * 100;

    return (
      <div className="console-item range">
        <div className="text">{this.props.text}</div>
        <div className="range-value"
          ref={(c) => this.range = c}
          onMouseDown={this.handleMouseDown.bind(this)}
          onMouseUp={(e) => {this.handleMouseMove(e); this.mouseDown = false}}
          onMouseMove={this.handleMouseMove.bind(this)}
          onMouseLeave={() => this.mouseDown = false}>
          <div className="pointer" style={{width: `${range}%`}}></div>
        </div>
        <div className="text-value"><input type="text" value={this.props.value} onChange={(e) => this.props.onChange(
          Math.max(this.props.minValue, Math.min(this.props.maxValue, parseInt(e.target.value) || this.props.minValue))
        )}/></div>
      </div>
    )
  }
}
