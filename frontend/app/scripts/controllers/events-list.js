'use strict';

module.exports = function($scope) {
  console.log($scope)
  $scope.alerts = [
    { type: 'danger', msg: 'Oh sdnap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];
};