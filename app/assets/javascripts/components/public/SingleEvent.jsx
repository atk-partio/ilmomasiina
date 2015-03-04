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
var RouteHandler = Router.RouteHandler;

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
    if (!this.state || this.state.loading) {
      return this.getLoadingHtml();
    }
    else if (_.isEmpty(this.state.event)) {
      return this.getNotFoundHtml();
    }
    else {
      return this.getEventHtml(this.state.event);
    }
  },

  getEventHtml(event) {
    return (
      <section>
        { /* Route handler for modals (enrollment etc) */ }
        <RouteHandler event={this.state.event} />

        <img className="ilmoimage img-responsive" alt="" src={event.image} />

        <h1>{event.name}</h1>

        <div dangerouslySetInnerHTML={{__html: marked(event.description || "")}} />

        <div className="event-enroll">
          <Link to="enroll" params={{eventId: event.id}} className="btn btn-primary">
            Ilmoittaudu
          </Link>
        </div>

        { this.getQuotasHtml(event.questions, event.quota_groups) }
      </section>
    );
  },

  getQuotasHtml(questions, quotaGroups) {
    var quotaTabPanes = quotaGroups.map(quota => {
      return (
        <TabPane eventKey={quota.id} tab={`${quota.name} (0 / ${quota.value}`}>
          <EnrollmentsTable questions={questions} enrollments={[]}></EnrollmentsTable>
        </TabPane>
      );
    });

    return (
      <TabbedArea defaultActiveKey={0}>
        <TabPane eventKey={0} tab="Kaikki">
          <EnrollmentsTable questions={questions} enrollments={[]}></EnrollmentsTable>
        </TabPane>
        { quotaTabPanes }
      </TabbedArea>
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
