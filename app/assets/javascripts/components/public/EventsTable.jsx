/* jshint quotmark:false, maxlen:false */

import React from 'react';
import moment from 'moment';
import Bootstrap from 'react-bootstrap';

// Use Finnish locale with Moment
import 'moment/locale/fi';
moment.locale('fi');

import Router from 'react-router';
var Link = Router.Link;

var EventsTable = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    events: React.PropTypes.array.isRequired
  },

  render() {
    var eventRows = this.props.events.map((event) => {
      return(
        <tr>
          <td><Link to="event" params={{eventId: event.id}}>{event.name}</Link></td>
          <td>{moment(event.registration_begins_at).format('lll')}</td>
          <td>{moment(event.registration_ends_at).format('lll')}</td>
        </tr>
      );
    });

    return (
      <Bootstrap.Panel header={<h2 >{this.props.title}</h2>}>
        <Bootstrap.Table fill striped hover responsive>
          <thead>
            <tr>
              <th>Ilmo</th>
              <th>Avautui</th>
              <th>Sulkeutuu</th>
            </tr>
          </thead>

          <tbody>
            {eventRows}
          </tbody>
        </Bootstrap.Table>
      </Bootstrap.Panel>
    );
  }
});

export default EventsTable;
