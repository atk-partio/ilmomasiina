/* jshint quotmark:false, maxlen:false */

import React from 'react';
import EventsTable from 'components/public/EventsTable';

var EventsList = React.createClass({
  render() {
    return (
      <div>
        <EventsTable />
      </div>
    );
  }
});

export default EventsList;
