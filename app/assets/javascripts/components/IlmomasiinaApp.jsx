/* jshint quotmark:false, maxlen:false */

import React from 'react';
import Router from 'react-router';
import Routes from 'components/Routes';

/* Wrap react-router to React component for react-rails interoperability */
var IlmomasiinaApp = React.createClass({
  propTypes: {
    events: React.PropTypes.array.isRequired
  },

  getInitialState () { return { Handler: null }; },
  componentDidMount () {
    Router.run(Routes, (Handler) => {
      this.setState({ Handler });
    });
  },

  render () {
    var { Handler } = this.state;
    return Handler ? <Handler events={this.props.events} /> : null;
  }
});

export default IlmomasiinaApp;
