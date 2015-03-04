/* jshint quotmark:false, maxlen:false */
import React from 'react';
import EventsList from 'components/public/EventsList';
import SingleEvent from 'components/public/SingleEvent';
import Enrollment from 'components/public/Enrollment';
import Router from 'react-router';
import RootView from 'components/RootView';

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var Routes = (
  <Route name="app" path="/" handler={RootView}>
    <Route name="event" path="event/:eventId" handler={SingleEvent}>
      <Route name="enroll" path="enroll" handler={Enrollment} />
    </Route>
    <DefaultRoute handler={EventsList} />
  </Route>
);

export default Routes;