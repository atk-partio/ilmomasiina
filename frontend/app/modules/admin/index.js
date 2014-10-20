'use strict';

var app = require('angular').module('ilmomasiina')

app.config(($routeProvider) => {
  $routeProvider
    .when('/admin', { templateUrl: 'landing.tpl.html', controller: 'AdminCtrl'})
})
