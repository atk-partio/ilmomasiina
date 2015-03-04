/* jshint quotmark:false, maxlen:false */

import React from 'react';
import _ from 'lodash';

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
              { this.getQuestionRowsHTML() }
            </thead>
            <tbody>
              { this.getAnswerRowsHTML() }
            </tbody>
          </table>
        </section>
      );
    }
    else {
      return (
        <p>Ei ilmoittautumisia.</p>
      );
    }
  },

  getQuestionRowsHTML() {
    return <tr> { this.props.questions.map((question) => {
      return( <th>{question.value}</th>);
    }) } </tr>;
  },

  getAnswerRowsHTML() {
    return this.props.enrollments.map(this.addAnswerTexts).map((enrollment) => {
      return (
        <tr>
          { enrollment.answerTexts.map((answer) => { return( <td>{answer}</td> ); }) }
        </tr>
      );
    });
  },

  addAnswerTexts(enrollment) {
    // TODO Extend mutates enrollment. That's not a good thing, so maybe we should use Immutable.js.
    return _.extend(enrollment, {answerTexts: _.map(enrollment.answers, this.getAnswerText)});
  },

  getAnswerText(answer) {
    var matchingQuestion = _.find(this.props.questions, {'id': answer.question_id});

    switch (matchingQuestion.type) {
      case "text/name":
      case "text/tel":
      case "text/email":
      case "text/long":
        return answer.value;
      case "boolean":
        return answer.value ? 'Yes' : 'No';
      case "select/many":
      case "select/one":
        var optionIds = _.isArray(answer.value) ? answer.value : [answer.value];
        return optionIds.map(id => {
          return _.find(matchingQuestion.options, {'id': id}).value;
        }).join(', ');
      default:
        return "";
    }
  }
});

export default EnrollmentsTable;
