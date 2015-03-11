import Reflux from 'reflux';
import API from 'utils/API';

var Actions = Reflux.createActions({
    'getEventAndEnrollments': { asyncResult: true },
    'createEnrollment': { asyncResult: true },
    'setEnrollmentAnswers': {}
});

Actions.getEventAndEnrollments.listen((eventId) => {
    Actions.getEventAndEnrollments.promise(
      Promise.all([API.getEvent(eventId), API.getEnrollments(eventId)])
    );
});

Actions.createEnrollment.listen((eventId) => {
    Actions.createEnrollment.promise(
      Promise.all(API.createEnrollment(eventId))
    );
});

export default Actions;