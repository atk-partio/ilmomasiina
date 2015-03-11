import Reflux from 'reflux';
import Actions from 'actions/Actions';

var SingleEventStore = Reflux.createStore({
  initialState: {loading: true},

  init() {
      this.listenTo(Actions.getEventAndEnrollments, () => {
        this.replaceState({loading: true});
      });

      this.listenTo(Actions.getEventAndEnrollments.completed, (result) => {
        this.replaceState({loading: false, event: result[0], enrollments: result[1]});
      });

      this.listenTo(Actions.getEventAndEnrollments.failed, (error) => {
        this.replaceState({loading: false, error: error});
      });
  },

  getInitialState() {
    // Reset store state on component initialization
    this.state = this.initialState;
    return this.state;
  },

  replaceState(newState) {
    this.state = newState;
    this.trigger(this.state);
  }
});

export default SingleEventStore;