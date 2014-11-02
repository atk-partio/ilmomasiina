'use strict';

module.exports = $resource => {
  return $resource('examples/events/:eventId/questions.json', {eventId: 1});
}