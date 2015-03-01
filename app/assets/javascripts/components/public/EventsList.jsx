/* jshint quotmark:false, maxlen:false */

import React from 'react';
import EventsTable from 'components/public/EventsTable';

var EventsList = React.createClass({
  propTypes: {
    events: React.PropTypes.array.isRequired
  },

  render() {
    return (
      <section>
        <EventsTable title="Kaikki tapahtumat" events={this.props.events} />
      </section>
    );
  }
});

export default EventsList;
