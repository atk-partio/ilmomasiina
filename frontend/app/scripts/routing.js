var app = require('angular').module('ilmomasiina')

app.config(function($routeProvider) {
  $routeProvider
    .when('/landing', { templateUrl: 'controllers/landing.html', controller: 'LandingCtrl'})
    .when('/event', { templateUrl: 'controllers/event.html', controller: 'EventCtrl'})
    .when('/', { templateUrl: 'controllers/events-list.html', controller: 'EventsListCtrl'})
    .otherwise({ redirectTo: '/' });
}); 