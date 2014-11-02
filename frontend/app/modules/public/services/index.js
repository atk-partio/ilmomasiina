'use strict';

var ilmomasiinaServices = require('angular').module('ilmomasiinaServices', ['ngResource'])

ilmomasiinaServices.factory('Events', require('./events.js'));
ilmomasiinaServices.factory('Event', require('./event.js'));
ilmomasiinaServices.factory('Questions', require('./questions.js'));
ilmomasiinaServices.factory('Enrollment', require('./enrollment.js'));
ilmomasiinaServices.factory('Enrollments', require('./enrollments.js'));