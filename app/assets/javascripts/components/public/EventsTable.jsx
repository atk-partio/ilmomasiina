/* jshint quotmark:false, maxlen:false */

import React from 'react';
import moment from 'moment';
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
          <td>{moment(event.registration_begins_at).format('h:mm:ss a')}</td>
          <td>{moment(event.registration_ends_at).format('h:mm:ss a')}}</td>
        </tr>
      );
    });

    return (
      <div className="panel panel-default events-panel">
        <div className="panel-heading">
          <h2 className="panel-title">{this.props.title}</h2>
        </div>
        <table className="table table-striped table-s hidden-xs">
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
        </table>
      </div>
    );
  }
});

export default EventsTable;
