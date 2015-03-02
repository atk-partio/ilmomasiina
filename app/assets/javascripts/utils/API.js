import request from 'superagent';

var API = {
  loadEvent(eventId) {
    return new Promise((resolve, reject) => {
      request.get(`/api/events/${eventId}`, function(res) {
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