/* jshint quotmark:false, maxlen:false */

import React from 'react';
import Router from 'react-router';

var Event = React.createClass({
  mixins: [ Router.State ],

  render() {
    var params = this.getParams();
    return (
      <div>
        Yksittäinen eventti. Sen ID lienee {params.eventId}.
      </div>
    );
  }
});

export default Event;
