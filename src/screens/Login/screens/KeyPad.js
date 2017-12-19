import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Heading from '../../../components/Heading';
import NumberPad from '../../../components/NumberPad';

export default class KeyPad extends React.Component {

  render(){
    return(
      <View style={styles.container}>
        <Heading />

        <NumberPad />

        <TouchableOpacity>
          <Text>Submit</Text>
        </TouchableOpacity>

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
