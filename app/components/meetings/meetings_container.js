import { connect } from 'react-redux';
import { MeetingsActions } from '../../actions/meetings_actions';

import MeetingsIndex from './meetings_index';

const mapStateToProps = state => ({
  meetings: state.meetings,
});

const mapDispatchToProps = dispatch => ({
  requestMeetings: () => dispatch(MeetingsActions.requestMeetings()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeetingsIndex);
