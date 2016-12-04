import React from 'react';
import { AppRegistry } from 'react-native';
import App from './app/App';

class Huddle extends React.Component {
  render() {
    return <App />;
  }
}

// Java requires component called 'LinkApp' to be registered
AppRegistry.registerComponent('LinkApp', () => Huddle);
