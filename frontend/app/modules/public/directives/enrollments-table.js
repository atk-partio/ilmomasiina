module.exports = function() {
  return {
    scope: {
      enrollments: '=',
      questions: '='
    },
    restrict: 'AE',
    replace: true,
    templateUrl: 'public/directives/enrollments-table.html',
    link: function(scope, elem, attrs) {
      console.log(scope)
    }
  };
}