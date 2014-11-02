'use strict';

var ilmomasiinaServices = angular.module('ilmomasiinaServices', ['ngResource'])

ilmomasiinaServices.factory('Events', require('./events.js'));
ilmomasiinaServices.factory('Event', require('./event.js'));
ilmomasiinaServices.factory('Questions', require('./questions.js'));
ilmomasiinaServices.factory('Enrollments', require('./enrollments.js'));