/* jshint quotmark:false, maxlen:false */
import React from 'react';
import Router from 'react-router';
import Bootstrap from 'react-bootstrap';
var RouteHandler = Router.RouteHandler;

var RootView = React.createClass({
  propTypes: {
    events: React.PropTypes.array.isRequired
  },

  render() {
    return (
      <div>
        <Bootstrap.Navbar fluid brand={<Router.Link to="/">Ilmomasiina</Router.Link>} inverse />

        <article className="container-fluid">
          <RouteHandler events={this.props.events} />
        </article>

        <footer className="container-fluid">
          <p>Ilmomasiina by <a href="https://github.com/atk-partio/">ATK-Partio</a> of <a href="http://athene.fi">Athene</a></p>
        </footer>
      </div>
    );
  }
});

export default RootView;