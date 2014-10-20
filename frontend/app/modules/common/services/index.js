'use strict';

var ilmomasiinaServices = angular.module('ilmomasiinaServices', ['ngResource'])
ilmomasiinaServices.factory('Events', require('./events.js'));