const React = require('react');
import { Provider, connect } from 'react-redux'
import Console from './console'
import Canvas from './canvas'

require('./index.scss')

class Index extends React.Component {
  render() {
    return (
      <div id="workspace">
        <Console {...this.props.brush} dispatch={this.props.dispatch}
          onClearClick={() => this.canvas.clear()}
          onSaveClick={() => this.canvas.save()}
        />
        <Canvas brush={this.props.brush} dispatch={this.props.dispatch} ref={(c) => this.canvas = c}/>
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    brush: state.brush
  }
}

const ConnectedIndex = connect(mapStateToProps)(Index)

export default class StoreIndex extends React.Component {
  render () {
    return (
      <Provider store={ this.props.store }>
        <ConnectedIndex />
      </Provider>
    )
  }
}