const React = require('react');
import { Provider, connect } from 'react-redux'
import Console from './console'

class Index extends React.Component {
  render() {
    return (
      <div>
        <Console {...this.props.brush} dispatch={this.props.dispatch}/>
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