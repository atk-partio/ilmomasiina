var app = require('angular').module('ilmomasiina')

app.config(function($routeProvider) {
  $routeProvider
    .when('/landing', { templateUrl: 'controllers/landing.html', controller: 'LandingCtrl'})
    .otherwise({ redirectTo: '/todos' });
});