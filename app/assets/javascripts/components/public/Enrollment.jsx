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

      return (
          <Bootstrap.Modal {...this.props} title={`Ilmoittautuminen tapahtumaan ${event.name}`} bsStyle="primary" animation={true} onRequestHide={_.noop} >
            <div className="modal-body">
              { this.getStatusHTML() }

              { this.getErrorsHTML() }

              { this.getFormHTML() }
            </div>
            <div className="modal-footer">
              <Bootstrap.Button>Peruuta</Bootstrap.Button>
              <Bootstrap.Button bsStyle="primary" onClick={this.enroll}>Ilmoittaudu</Bootstrap.Button>
            </div>
          </Bootstrap.Modal>
      );
    },

    getStatusHTML() {
      var enrollment = {created_at: 0};

      var enrollmentsCount = 0;
      var unconfirmedEnrollmentsCount = 0;
      var confirmationTimeLeftInMinutes = 0;

      return (
        <Bootstrap.Alert bsStyle="info">
          Olet järjestyksessä <strong>{enrollmentsCount}.</strong> ilmoittautunut. Edessäsi on <strong>{unconfirmedEnrollmentsCount}</strong> vahvistamatonta ilmoittautumista.
          Ilmoittautumisaikasi oli <strong>{enrollment.created_at}</strong> ja aikaa
          ilmoittautumisen vahvistamiseen sinulla on <strong>{confirmationTimeLeftInMinutes}</strong> minuuttia.
        </Bootstrap.Alert>
      );
    },

    getErrorsHTML() {
      var errors = this.props.event.errors || [];


      if (errors.length > 0) {
        return (
          <Bootstrap.Alert bsStyle="warning">
            { errors.map}
          </Bootstrap.Alert>
        );
      }
    },

    getFormHTML() {
      return(
        <form className="form-horizontal">
          <Bootstrap.Input type="text" label="Text" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
          <Bootstrap.Input type="textarea" label="Textarea" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
          <Bootstrap.Input type="checkbox" label="Checkbox" wrapperClassName="col-xs-offset-2 col-xs-10" help="Offset is applied to wrapper." />
        </form>
      );
    },

    enroll() {
      console.log("Send enrollment button clicked");
    }
});

export default Enrollment;
