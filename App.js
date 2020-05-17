import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers'
import 'react-native-gesture-handler';
import AppStatusBar from './components/AppStatusBar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddDeck from './components/AddDeck'
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import MainNavigator from './components/MainNavigator';
import {setLocalNotification} from './helpers/NotificationHelper';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarOptions = {
  activeTintColor: Platform.OS === "ios"
    ? "purple"
    : "white",
  style: {
    height: 70,
    showLabel: false,
    backgroundColor: Platform.OS === "ios"
      ? "white"
      : "lightblue",
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1
  }
}
export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>

        <AppStatusBar backgroundColor="green" barStyle='light-content'/>
        <NavigationContainer>
          <Tab.Navigator tabBarOptions={tabBarOptions}>
            <Tab.Screen
              options={{
              tabBarLabel: 'Flash-card',
              tabBarIcon: ({tintColor}) =>< Ionicons name = "ios-bookmarks" size = {
                30
              }
              color = {
                tintColor
              } />
            }}
              name="MainNavigator"
              component={MainNavigator}/>
            <Tab.Screen
              options={{
              tabBarLabel: 'Add Dock',
              tabBarIcon: ({tintColor}) =>< FontAwesome name = "plus-square" size = {
                30
              }
              color = {
                tintColor
              } />
            }}
              name="AddDock"
              component={AddDeck}/>
          </Tab.Navigator>
        </NavigationContainer>
        

      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});

