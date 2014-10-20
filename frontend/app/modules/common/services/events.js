'use strict';

module.exports = $resource => {
  return $resource('api/events');
}