import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import Heading from '../../../components/Heading';
import LogOutBar from '../../../components/LogOutBar';

export default class LeavePage extends React.Component {

  render(){
    return(
      <View style={styles.container}>
        <Heading />
        <LogOutBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(71, 80, 92)'
  },
})
