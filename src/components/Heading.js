import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default class Heading extends React.Component {
  render(){
    return(
      <View>
        <View style={styles.topbar}/>

        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.largeText}>TimeClock</Text>
            <Text style={styles.largeText}>11:15 AM</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.smallText}>
              <SimpleLineIcons name={'location-pin'} color={'white'} size={14}/>
              Gardens Point Campus
            </Text>
            <Text style={styles.smallText}>Friday 14th Jul</Text>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  topbar: {
    height: 20,
    width: '100%',
    backgroundColor: 'rgb(52, 133, 174)',
  },
  container: {
    padding: 5,
    backgroundColor: 'rgb(62,159,205)'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2
  },
  largeText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  smallText: {
    fontSize: 15,
    color: 'white',
  }
})
