import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import AppRouter from './components/router';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <AppRouter />
      </Provider>
    );
  }
}
