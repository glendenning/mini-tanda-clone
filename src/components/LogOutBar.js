import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class LogOutBar extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => Actions.login({type: 'reset'})}>
          <FontAwesome name={'chevron-left'} size={10} color={'white'} />
          <Text style={styles.buttonText}>Keypad</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Jack</Text>
          <FontAwesome name={'circle'} size={10} color={'white'} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: 'rgb(53, 61, 67)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    marginHorizontal: 5,
    color: 'white',
    fontSize: 15,
  }
})
