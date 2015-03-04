import Reflux from 'reflux';
import Actions from 'actions/Actions';

var SingleEventStore = Reflux.createStore({
  initialState: {loading: true},

  init() {
      this.listenTo(Actions.loadEvent, () => {
        this.updateState({loading: true});
      });

      this.listenTo(Actions.loadEvent.completed, (result) => {
        this.updateState({loading: false, event: result[0], enrollments: result[1]});
      });

      this.listenTo(Actions.loadEvent.failed, (error) => {
        this.updateState({loading: false, error: error});
      });
  },

  getInitialState() {
    // Reset store state on component initialization
    this.state = initialState;
    return this.state;
  },

  updateState(newState) {
    this.state = newState;
    this.trigger(this.state);
  }
});

export default SingleEventStore;