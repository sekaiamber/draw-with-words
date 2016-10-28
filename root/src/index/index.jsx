const React = require('react');
require('./index.scss');

const logo = document.createElement('img');
logo.src = require('./../../assets/images/logo.svg');

var Index = React.createClass({
  getInitialState() {
    return {
      theme: 'light',
    };
  },
  render: function () {
    return (
      <div>
        <h1>React Start Kit</h1>
        <div><img src={logo.src} /></div>
      </div>
    )
  }
});

module.exports = Index;
