'use strict';

var angular = require('angular')
var route = require('../vendor/angular-route.min.js')

var app = angular.module('ilmomasiina',  ['ngRoute'])


require('./services')
require('./controllers')
require('./directives')

require('./routing')