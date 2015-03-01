/* jshint quotmark:false, maxlen:false */
import React from 'react';
import EventsList from 'components/public/EventsList';
import Event from 'components/public/Event';
import Router from 'react-router';
import RootView from 'components/RootView';

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var Routes = (
  <Route name="app" path="/" handler={RootView}>
    <Route name="event" path="event/:eventId" handler={Event} />
    <DefaultRoute handler={EventsList} />
  </Route>
);

export default Routes;