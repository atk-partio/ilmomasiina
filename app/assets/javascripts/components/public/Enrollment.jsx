/* jshint quotmark:false, maxlen:false */

import React from 'react';
import Bootstrap from 'react-bootstrap';
import _ from 'lodash';

var Enrollment = React.createClass({
  propTypes: {
    event: React.PropTypes.object.isRequired
  },

  render() {
      var event = this.props.event;
      var enrollment = {created_at: 0};
      var enrollmentsCount = 0;
      var unconfirmedEnrollmentsCount = 0;
      var confirmationTimeLeftInMinutes = 0;

      return (
          <Bootstrap.Modal {...this.props} title={`Ilmoittautuminen tapahtumaan ${event.name}`} bsStyle="primary" animation={true} onRequestHide={_.noop} >
            <div className="modal-body">
              <Bootstrap.Alert bsStyle="info">
                Olet järjestyksessä <strong>{enrollmentsCount}.</strong> ilmoittautunut. Edessäsi on <strong>{unconfirmedEnrollmentsCount}</strong> vahvistamatonta ilmoittautumista.
                Ilmoittautumisaikasi oli <strong>{enrollment.created_at}</strong> ja aikaa
                ilmoittautumisen vahvistamiseen sinulla on <strong>{confirmationTimeLeftInMinutes}</strong> minuuttia.
              </Bootstrap.Alert>

              <Bootstrap.Alert bsStyle="warning">
                Ilmoittautumisessasi on virheitä.
              </Bootstrap.Alert>
            </div>
            <div className="modal-footer">
              <Bootstrap.Button>Peruuta</Bootstrap.Button>
              <Bootstrap.Button bsStyle="primary" onClick={this.enroll}>Ilmoittaudu</Bootstrap.Button>
            </div>
          </Bootstrap.Modal>
      );
    },

    enroll() {
      console.log("Send enrollment button clicked");
    }
});

export default Enrollment;
