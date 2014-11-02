'use strict';

module.exports = $resource => {
  return $resource('/examples/events/:id.json', {id: 1});
}