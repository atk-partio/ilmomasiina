'use strict';

module.exports = ($scope, Events, filterFilter) => {
  var events = Events.query(function() {
    $scope.activeEvents = filterFilter(events, isActiveEvent)
    $scope.futureEvents = filterFilter(events, isFutureEvent)
    $scope.pastEvents = filterFilter(events, isPastEvent)
  })

  function isActiveEvent(event) {
    var now = new Date();
    return new Date(event.registration_begins_at) < now && new Date(event.registration_ends_at) > now
  }

  function isFutureEvent(event) {
    var now = new Date();
    return new Date(event.registration_begins_at) > now
  }

  function isPastEvent(event) {
    var now = new Date();
    return new Date(event.registration_ends_at) < now
  }
}