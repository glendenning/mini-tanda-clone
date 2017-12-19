import React from 'react';
import {Text, View} from 'react-native';
import * as firebase from 'firebase';
import {Router, Scene, Actions} from 'react-native-router-flux';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD7re_emQrukc_Dpr21e45WdaCMlFjH02k",
  authDomain: "timeclock-fec82.firebaseapp.com",
  databaseURL: "https://timeclock-fec82.firebaseio.com",
  projectId: "timeclock-fec82",
  storageBucket: "timeclock-fec82.appspot.com",
  messagingSenderId: "431441221714"
};
firebase.initializeApp(firebaseConfig);

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';

// Screens
import Login from './screens/Login';
import TimeClock from './screens/TimeClock';
import Leave from './screens/Leave';
import Settings from './screens/Settings';

const activeTintColor = 'white';
const inactiveTintColor = 'rgb(136, 154, 178)';
const TimeClockIcon = ({title, focused}) => {
  return <SimpleLineIcons name={"clock"} size={25}
            color={focused ? activeTintColor : inactiveTintColor}/> };
const LeaveIcon = ({title, focused}) => {
  return <SimpleLineIcons name={"plane"} size={25}
            color={focused ? activeTintColor : inactiveTintColor}/> };
const SettingsIcon = ({title, focused}) => {
  return <SimpleLineIcons name={"settings"} size={25}
            color={focused ? activeTintColor : inactiveTintColor}/> };

class App extends React.Component {

  render(){
    return(
      <Router>
      <Scene key="root">

        <Scene key="login" title="Login" component={Login} initial hideNavBar/>

        <Scene key="tabbar" tabs hideNavBar lazy
          inactiveBackgroundColor={'rgb(53,59,69)'}
          activeBackgroundColor={'rgb(53,59,69)'}
          activeTintColor={activeTintColor}
          inactiveTintColor={inactiveTintColor}
        >

          <Scene key="TimeClock" title="TimeClock" icon={TimeClockIcon} hideNavBar>
            <Scene
              key="TimeClock"
              title="TimeClock"
              component={TimeClock}
              initial
            />
          </Scene>

          <Scene key="Leave" title="Leave" icon={LeaveIcon} hideNavBar>
            <Scene
              key="Leave"
              title="Leave"
              component={Leave}
              initial
            />
          </Scene>

          <Scene key="Settings" title="Settings" icon={SettingsIcon} hideNavBar>
            <Scene
              key="Settings"
              title="Settings"
              component={Settings}
              initial
            />
          </Scene>

        </Scene>
      </Scene>
    </Router>
    )
  }
}

export default class Cake extends React.Component {
  render() {
    return (
      <App />
    );
  }
}
