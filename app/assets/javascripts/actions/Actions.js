import Reflux from 'reflux';
import API from 'utils/API';

var Actions = Reflux.createActions({
    'loadEvent': { asyncResult: true }
});

Actions.loadEvent.listen((eventId) => {
    Actions.loadEvent.promise(
      Promise.all([API.loadEvent(eventId), API.loadEnrollments(eventId)])
    );
});

export default Actions;