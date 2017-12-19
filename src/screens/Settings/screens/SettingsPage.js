import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Heading from '../../../components/Heading';
import LogOutBar from '../../../components/LogOutBar';


export default class SettingsPage extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Heading />
        <LogOutBar />
        <Text>Settings Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(71, 80, 92)'
  }
})
