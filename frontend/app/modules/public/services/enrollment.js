'use strict';

module.exports = $resource => {
  return $resource('examples/events/:eventId/enrollments/:enrollmentId.json', {eventId: 1, enrollmentId: 2});
}