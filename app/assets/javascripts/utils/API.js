import request from 'superagent';

var realEndpoints = {
  'getEvent': (eventId) => {
    return {url: `/api/events/${eventId}`, method: `get`};
  },
  'getEnrollments': (eventId) => {
    return {url: `/api/events/${eventId}`, method: `get`};
  },
  'createEnrollment': (eventId) => {
    return {url: `/api/events/${eventId}/enrollments`, method: `put`};
  }
};

function wrapMock(url) { return {url: url, method: 'get'}; }
var mockedEndpoints = {
  'getEvent': (eventId) => wrapMock(`/examples/events/${eventId}.json`),
  'getEnrollments': (eventId) => wrapMock(`/examples/events/${eventId}/enrollments.json`),
  'createEnrollment': (eventId) => wrapMock(`/examples/events/${eventId}/enrollment/put.json`)
};

var endpoints = window.location.href.indexOf('?mockapi') > 0 ? mockedEndpoints : realEndpoints;

function promiseRequest(endpoint) {
  return new Promise((resolve, reject) => {
    request[endpoint.method](endpoint.url, function(res) {
      if (res.ok) {
        resolve(res.body);
      }
      else {
        reject(res.error);
      }
    });
  });
}

var API = {
  getEvent: (eventId) => promiseRequest(endpoints.getEvent(eventId)),
  getEnrollments: (eventId) => promiseRequest(endpoints.getEnrollments(eventId)),
  createEnrollment: (eventId) => promiseRequest(endpoints.createEnrollment(eventId))
};

export default API;