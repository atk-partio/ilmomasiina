'use strict';

var angular = require('angular')
require('angular-route')
require('angular-animate')
require('angular-resource')

require('../bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js')

// builded with https://github.com/miickel/gulp-angular-templatecache
require('./templates')

angular.module('ilmomasiina', ['ngRoute', 'templates', 'ui.bootstrap'])

require('./routing')

require('./services')
require('./controllers')
require('./directives')