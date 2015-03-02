import Reflux from 'reflux';
import request from 'superagent';
import API from 'utils/API';

var Actions = Reflux.createActions({
    'loadEvent': { asyncResult: true }
});

Actions.loadEvent.listen((eventId) => {
    Actions.loadEvent.promise( API.loadEvent(eventId) );
});

export default Actions;