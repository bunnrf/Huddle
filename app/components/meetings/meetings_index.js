import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MeetingsIndexItem from './meetings_index_item';

class MeetingsIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestMeetings();
  }

  render() {
    console.log(this.props.meetings);
    return (
      <View style={styles.container}>
        <ScrollView>
          { this.props.meetings && this.props.meetings.map(meeting => {
            return <MeetingsIndexItem key={ meeting.id } meeting={ meeting } />
          }) }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  }
});

export default MeetingsIndex;
