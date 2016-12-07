import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const MeetingsIndexItem = ({ meeting }) => (
  <View style={ styles.container }>
    <Text>
      { meeting.title }
      { meeting.location }
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50
  }
});

export default MeetingsIndexItem;
