/* jshint quotmark:false, maxlen:false */

import React from 'react';
import Router from 'react-router';
import Reflux from 'reflux';
import EnrollmentsTable from 'components/public/EnrollmentsTable';
import TabbedArea from 'react-bootstrap/lib/TabbedArea';
import TabPane from 'react-bootstrap/lib/TabPane';
import marked from 'marked';
import SingleEventStore from 'stores/SingleEventStore';
import Actions from 'actions/Actions';
import _ from 'lodash';

var Link = Router.Link;

var SingleEvent = React.createClass({
  propTypes: {
    // Events prop used only in getLoadingHtml
    events: React.PropTypes.array.isRequired
  },

  mixins: [
    Reflux.listenTo(SingleEventStore, 'onStoreUpdate'),
    Router.State
  ],

  componentWillMount() { this.loadEvent(); },
  componentWillReceiveProps() { this.loadEvent(); },
  loadEvent() { Actions.loadEvent(this.getEventId()); },

  onStoreUpdate(storeValue) { this.setState(storeValue); },

  render() {
    if (!this.state || this.state.loading) { return this.getLoadingHtml(); }

    var event = this.state.event;
    if (_.isEmpty(event)) { return this.getNotFoundHtml(); }

    return this.getEventHtml(event);
  },

  getEventHtml(event) {
    var quotaTabPanes = event.quota_groups.map(quota => {
      return (
        <TabPane eventKey={quota.id} tab={`${quota.name} (0 / ${quota.value}`}>
          <EnrollmentsTable questions={event.questions} enrollments={[]}></EnrollmentsTable>
        </TabPane>
      );
    });

    return (
      <section>
        <img className="ilmoimage img-responsive" alt="" src={event.image} />

        <h1>{event.name}</h1>

        <div dangerouslySetInnerHTML={{__html: marked(event.description || "")}} />

        <div className="event-enroll">
          <Link to="enroll" params={{eventId: event.id}} className="btn btn-primary">
            Ilmoittaudu
          </Link>
        </div>

        <TabbedArea defaultActiveKey={0}>
          <TabPane eventKey={0} tab="Kaikki">
            <EnrollmentsTable questions={event.questions} enrollments={[]}></EnrollmentsTable>
          </TabPane>
          { quotaTabPanes }
        </TabbedArea>
      </section>
    );
  },

  getLoadingHtml() {
    // Show event image and name using the preloaded event data
    var eventId = this.getEventId();
    var event = this.props.events.filter((event) => { return event.id === eventId; })[0];

    return(
      <section>
        <img className="ilmoimage img-responsive" alt="" src={event.image} />
        <h1>{event.name}</h1>
        <p>Ladataan tapahtumaa...</p>
      </section>
    );
  },

  getNotFoundHtml() {
    return (
      <p>Tapahtumaa ei löydy.</p>
    );
  },

  getEventId() {
    //Get event ID from route param
    return Number(this.getParams().eventId);
  }
});

export default SingleEvent;
