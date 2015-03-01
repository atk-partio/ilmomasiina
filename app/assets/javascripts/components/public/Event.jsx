/* jshint quotmark:false, maxlen:false */

import React from 'react';
import Router from 'react-router';
import EnrollmentsTable from 'components/public/EnrollmentsTable';
import TabbedArea from 'react-bootstrap/lib/TabbedArea';
import TabPane from 'react-bootstrap/lib/TabPane';
import marked from 'marked';

var Event = React.createClass({
  propTypes: {
    events: React.PropTypes.array.isRequired
  },

  mixins: [ Router.State ],

  render() {
    var eventId = Number(this.getParams().eventId);
    var event = this.props.events.filter((event) => { return event.id === eventId; })[0];

    if (event) {
      var quotaGroups = event.quota ? event.quota.quota_groups : [];

      var quotaTabPanes = quotaGroups.map(quota => {
        return (
          <TabPane eventKey={quota.id} tab={`${quota.name} (0 / ${quota.value}`}>
            <EnrollmentsTable questions={[]} enrollments={[]}></EnrollmentsTable>
          </TabPane>
        );
      });

      return (
        <section>
          <img className="ilmoimage img-responsive" alt="" src={event.image} />

          <h1>{event.name}</h1>

          <div dangerouslySetInnerHTML={{__html: marked(event.description)}} />

          <div className="event-enroll">
            <a className="btn btn-primary">Ilmoittaudu</a>
          </div>

          <TabbedArea defaultActiveKey={0}>
            <TabPane eventKey={0} tab="Kaikki">
              <EnrollmentsTable questions={[]} enrollments={[]}></EnrollmentsTable>
            </TabPane>
            { quotaTabPanes }
          </TabbedArea>
        </section>
      );
    }
    else {
      return(
        <section>
          <p>Tapahtumaa ei löydy.</p>
        </section>
      );
    }
  }
});

export default Event;
