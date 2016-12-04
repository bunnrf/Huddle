import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>
          Welcome to Huddle!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
  }
})

export default Main;
