module.exports = function() {
  return {
    scope: {
      events: '=',
      title: '@'
    },
    restrict: 'AE',
    replace: true,
    templateUrl: 'public/directives/events-table.html',
    link: function(scope, elem, attrs) {
      console.log(scope)
    }
  };
}