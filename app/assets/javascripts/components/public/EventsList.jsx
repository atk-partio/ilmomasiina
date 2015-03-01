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
        { this.getFilteredEventsTable(this.isActiveEvent, "Avoimet ilmot") }
        { this.getFilteredEventsTable(this.isFutureEvent, "Tulevat ilmot") }
        { this.getFilteredEventsTable(this.isPastEvent, "Menneet ilmot") }
      </section>
    );
  },

  getFilteredEventsTable(filter, title) {
    var filteredEvents = this.props.events.filter(filter);
    return <EventsTable title={title} events={filteredEvents} />;
  },

  isActiveEvent(event) {
    var now = new Date();
    return new Date(event.registration_begins_at) < now && new Date(event.registration_ends_at) > now;
  },

  isFutureEvent(event) {
    var now = new Date();
    return new Date(event.registration_begins_at) > now;
  },

  isPastEvent(event) {
    var now = new Date();
    return new Date(event.registration_ends_at) < now;
  }
});

export default EventsList;
