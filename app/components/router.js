import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Main from './main/main_container';
import MapContainer from './map/map_container';
import ContactsContainer from './contacts/contacts_container';
import MeetingsContainer from './meetings/meetings_container';
import Icon from 'react-native-vector-icons/FontAwesome';


class TabIcon extends Component {
  render () {
    const color = this.props.selected ? '#FF3366' : '#FFB3B3'
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center'}}>
        <Icon style={{color: color}} name={this.props.iconName} size={30} />
        <Text style={{color: color}}>{this.props.title}</Text>
      </View>
     )
  }
}

class AppRouter extends Component {
  render() {
    return (
      <Router sceneStyle={{ backgroundColor: 'white' }}>
        <Scene key="root" hideNavBar>
          <Scene key="Tabbar"
            tabs
            hideNavBar
            tabBarStyle={styles.tabBar}
            default="Home">

            <Scene key="Home"
              title="Home"
              icon={TabIcon}
              iconName={'home'}
              hideNavBar
              component={Main}
              initial />

            <Scene key="Contacts"
              title="Contacts"
              iconName={'book'}
              icon={TabIcon}
              hideNavBar
              component={ContactsContainer} />

            <Scene key="Meetings"
              title="Meetings"
              iconName={'group'}
              icon={TabIcon}
              hideNavBar
              component={MeetingsContainer} />

            <Scene key="Map"
              title="Map"
              iconName={'map'}
              icon={TabIcon}
              hideNavBar
              hideTabBar
              component={MapContainer} />

          </Scene>
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    backgroundColor: 'white',
  }
})

export default AppRouter;
