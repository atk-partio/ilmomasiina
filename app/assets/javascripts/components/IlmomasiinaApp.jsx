/* jshint quotmark:false, maxlen:false */

import React from 'react';

var IlmomasiinaApp = React.createClass({
  render() {
    var eventPres = this.props.events.map((event) => {
      return <pre key={event.id}>{JSON.stringify(event, null, "\t")}</pre>;
    });
    return (
      <div>
        <h1>IlmomasiinaApp</h1>
        {eventPres}
      </div>
    );
  }
});

export default IlmomasiinaApp;
