'use strict';

module.exports = $resource => {
  return $resource('examples/events/:eventId/enrollments.json', {eventId: 1});
}