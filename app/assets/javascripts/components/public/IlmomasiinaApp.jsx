/* jshint quotmark:false, maxlen:false */

import React from 'react';
import EventsList from 'components/public/EventsList';
import Event from 'components/public/Event';
import Router from 'react-router';

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var IlmomasiinaApp = React.createClass({
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

        <RouteHandler/>
        
        <footer className="container-fluid">
          <p>Ilmomasiina by <a href="https://github.com/atk-partio/">ATK-Partio</a> of <a href="http://athene.fi">Athene</a></p>
        </footer>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={IlmomasiinaApp}>
    <Route name="event" path="event/:eventId" handler={Event} />
    <DefaultRoute handler={EventsList} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

export default IlmomasiinaApp;
