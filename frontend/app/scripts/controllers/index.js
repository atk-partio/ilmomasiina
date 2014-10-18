'use strict';

var app = require('angular').module('ilmomasiina')

app.controller('LandingCtrl', require('./landing'))
app.controller('EventsListCtrl', require('./events-list'))
app.controller('EventCtrl', require('./event'))