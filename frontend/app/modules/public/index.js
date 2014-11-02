'use strict';

var app = require('angular').module('ilmomasiina')

require('./services')

app.config(($routeProvider) => {
  $routeProvider
    .when('/event/:eventId', { templateUrl: 'public/event.tpl.html', controller: 'EventCtrl'})
    .when('/event/:eventId/enrollments/:enrollmentId', { templateUrl: 'public/enrollment.tpl.html', controller: 'EnrollmentCtrl'})
    .when('/', { templateUrl: 'public/events-list.tpl.html', controller: 'EventsListCtrl'})
})

app.directive('eventsTable', require('./directives/events-table.js'))
app.directive('enrollmentsTable', require('./directives/enrollments-table.js'))

app.controller('LandingCtrl', require('./landing'))
app.controller('EventsListCtrl', require('./events-list'))
app.controller('EventCtrl', require('./event'))
app.controller('EnrollmentCtrl', require('./enrollment'))