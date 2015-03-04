import request from 'superagent';

var useExampleData = false;

var realEndpoints = {
  'getEvent': (eventId) => `/api/events/${eventId}`
};

var exampleEndpoints = {
  'getEvent': (eventId) => `/examples/events/${eventId}.json`
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
  }
};

export default API;