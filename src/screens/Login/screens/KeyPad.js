import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

import Heading from '../../../components/Heading';
import NumberPad from '../../../components/NumberPad';

export default class KeyPad extends React.Component {

  render(){
    return(
      <View style={styles.container}>
        <Heading />

        <NumberPad />

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
