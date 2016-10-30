const React = require('react');
import $ from 'jquery'

function distance(pt, pt2){
  let dx = pt2.x - pt.x;
  let dy = pt2.y - pt.y;
  return Math.sqrt( dx * dx + dy * dy );
};
function textWidth(context, letter, size) {
  context.font = size + "px Georgia";
  return context.measureText(letter).width;
}


export default class Canvas extends React.Component {
  shouldComponentUpdate() {
    return false
  }
  componentDidMount() {
    // init canvas
    this.$canvas = $(this.canvas);
    this.setCanvasSize();
    $(window).resize(this.setCanvasSize.bind(this));
    // state
    this.mouse = {
      x: 0,
      y: 0,
      down: false
    };
    this.position = {
      x: 0,
      y: 0
    }
  }

  setCanvasSize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvasContext = this.canvas.getContext('2d');
  }

  // frame
  update() {
    if (this.mouse.down) {
      requestAnimationFrame(this.update.bind(this));
      this.draw();
    }
  }
  draw() {
    // 获得本次绘制的字的起始点和当前鼠标的位移距离
    let newDistance = distance(this.position, this.mouse);
    // 获得字体大小，根据速度变动（速度以距离代替，成正比），速度越大，字体越大
    let fontSize = this.props.brush.minSize + newDistance/2;
    if (fontSize > this.props.brush.maxSize) {
      // 防止字体大小溢出
      fontSize = this.props.brush.maxSize;
    }
    // 计算本次字的宽度
    let letter = this.props.brush.text[this.props.brush.textIndex];
    let letterSize = textWidth(this.canvasContext, letter, fontSize);
    // 如果位移大于字母宽度则绘制
    if (newDistance > letterSize) {
      // 计算角度
      let angle = Math.atan2(this.mouse.y - this.position.y, this.mouse.x - this.position.x);

      // 绘制
      this.canvasContext.font = fontSize + "px Georgia";
      this.canvasContext.save();
      this.canvasContext.translate(this.position.x, this.position.y);
      this.canvasContext.rotate(angle);
      this.canvasContext.fillText(letter, 0, 0);
      this.canvasContext.restore();

      // next
      // index ++
      this.props.dispatch({ type: 'BRUSH_ADD_TEXTINDEX' });
      // 更新下一个字母的起始位置
      this.position.x = this.position.x + Math.cos(angle) * letterSize;
      this.position.y = this.position.y + Math.sin(angle) * letterSize;
    }
    
  }

  // event
  handleMouseMove(e) {
    this.mouse.x = e.pageX;
    this.mouse.y = e.pageY;
  }
  handleMouseDown(e) {
    this.mouse.down = true;
    // 确认第一个字的起始点
    this.position.x = e.pageX;
    this.position.y = e.pageY;
    // 设置一些参数
    this.canvasContext.fillStyle = this.props.brush.color;

    // 开始更新
    this.update();
  }

  // export api
  clear() {
    this.canvas.width = this.canvas.width;
  }
  save() {
    let saveCanvas = document.createElement('canvas');
    saveCanvas.width = this.canvas.width;
    saveCanvas.height = this.canvas.height;
    let saveContext = saveCanvas.getContext('2d');

    // TODO:: use for resize when using hidpi screen

    // var pixelRatio = (function(context) {
    //   var backingStore = context.backingStorePixelRatio ||
    //         context.webkitBackingStorePixelRatio ||
    //         context.mozBackingStorePixelRatio ||
    //         context.msBackingStorePixelRatio ||
    //         context.oBackingStorePixelRatio ||
    //         context.backingStorePixelRatio || 1;

    //   return (window.devicePixelRatio || 1) / backingStore;
    // })(CanvasRenderingContext2D.prototype);

    saveContext.drawImage(this.canvas, 0, 0);
    
    window.open(saveCanvas.toDataURL('image/png'), '_blank');
  }


  render() {
    return (
      <canvas id="canvas" ref={(c) => this.canvas = c}
        onMouseMove={this.handleMouseMove.bind(this)}
        onMouseDown={this.handleMouseDown.bind(this)}
        onMouseUp={() => this.mouse.down = false}
        onMouseLeave={() => this.mouse.down = false}
      ></canvas>
    )
  }
}
