'use strict';

var angular = require('angular')
require('../vendor/angular-route.min.js')
require('../vendor/ui-bootstrap-tpls-0.11.2.min.js')

// builded with https://github.com/miickel/gulp-angular-templatecache
require('./templates')

angular.module('ilmomasiina', ['ngRoute', 'templates', 'ui.bootstrap'])

require('./routing')

require('./services')
require('./controllers')
require('./directives')