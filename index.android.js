import React from 'react';
import { AppRegistry } from 'react-native';
import App from './app/App';

// Java requires component called 'LinkApp' to be registered
class LinkApp extends React.Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('LinkApp', () => LinkApp);
