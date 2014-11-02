'use strict';

var _ = require('lodash')

module.exports = ($scope, $routeParams, $interval, Enrollment) => {
  var updateTimeLeftInterval = 5 * 1000

  Enrollment.get({eventId: $routeParams.eventId, enrollmentId: 1}).$promise.then((result) => {
    $scope.enrollments_count = result.enrollments_count
    $scope.unconfirmed_enrollments_count = result.unconfirmed_enrollments_count
    $scope.enrollment = result.enrollment
    $scope.questions = result.questions

    $scope.enrollmentCreatedAt = new Date(result.enrollment.created_at)
    $interval(updateTimeLeft, updateTimeLeftInterval)
    updateTimeLeft()
  })

  function updateTimeLeft() {
    var timeLeft = parseInt(Math.max(0, $scope.enrollmentCreatedAt - new Date()))
    $scope.confirmationTimeLeftInMinutes = timeLeft / 60
  }
}