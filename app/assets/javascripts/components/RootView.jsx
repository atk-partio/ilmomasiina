/* jshint quotmark:false, maxlen:false */
import React from 'react';
import Router from 'react-router';
var RouteHandler = Router.RouteHandler;

var RootView = React.createClass({
  propTypes: {
    events: React.PropTypes.array.isRequired
  },

  render() {
    return (
      <div>
         <div className="navbar navbar-inverse" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Ilmomasiina</a>
            </div>
          </div>
        </div>

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