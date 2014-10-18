'use strict';

module.exports = $scope => {
  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1', active: true},
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];

};