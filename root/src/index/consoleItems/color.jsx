const React = require('react');
import { ChromePicker } from 'react-color';

export default class ColorItem extends React.Component {
  handleColorChange(color) {
    this.props.onChange(color.hex);
  }

  render() {
    return (
      <div className="console-item color">
        <div className="text">{this.props.text}</div>
        <div className="text-value" style={{background: this.props.value}}>{this.props.value}
          <ChromePicker color={this.props.value} onChangeComplete={this.handleColorChange.bind(this)}/>
        </div>
      </div>
    )
  }
}
