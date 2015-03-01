/* jshint quotmark:false, maxlen:false */

import React from 'react';

var EnrollmentsTable = React.createClass({
  propTypes: {
    questions: React.PropTypes.array.isRequired,
    enrollments: React.PropTypes.array.isRequired
  },

  render() {
    if (this.props.enrollments.length > 0) {
      return (
        <section>
          <table className="table table-striped table-s hidden-xs">
            <thead>
              <tr>
                <th>Kymysys</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vastaus</td>
              </tr>
            </tbody>
          </table>

          <p>Ei ilmoittautumisia.</p>
        </section>
      );
    }
    else {
      return (
        <p>Ei ilmoittautumisia.</p>
      );
    }
  }
});

export default EnrollmentsTable;
