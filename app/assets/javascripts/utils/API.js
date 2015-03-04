import request from 'superagent';

var useExampleData = true;

var realEndpoints = {
  'getEvent': (eventId) => `/api/events/${eventId}`,
  'getEnrollments': (eventId) => `/api/events/${eventId}/enrollments`
};

var exampleEndpoints = {
  'getEvent': (eventId) => `/examples/events/${eventId}.json`,
  'getEnrollments': (eventId) => `/examples/events/${eventId}/enrollments.json`
};

var endpoints = useExampleData ? exampleEndpoints : realEndpoints;

var API = {
  loadEvent(eventId) {
    return new Promise((resolve, reject) => {
      request.get(endpoints.getEvent(eventId), function(res) {
        if (res.ok) {
          resolve(res.body);
        }
        else {
          reject(res.error);
        }
      });
    });
  },

  loadEnrollments(eventId) {
    return new Promise((resolve, reject) => {
      request.get(endpoints.getEnrollments(eventId), function(res) {
        if (res.ok) {
          resolve(res.body);
        }
        else {
          reject(res.error);
        }
      });
    });
  }
};

export default API;