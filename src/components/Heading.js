import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default class Heading extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      digitalTime: '',
    }
    this.digitalTime = this.digitalTime.bind(this);
  }

  digitalTime(){
    // const date = Date.now();
    const date = new Date();
    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    const meridiem = date.getHours() < 12 ? 'AM' : 'PM';
    if (hours > 12){
      hours -= 12;
    }
    const timeHM = hours + ":" + minutes + ' ' + meridiem;
    const timeHMS = hours + ":" + minutes + ":" + seconds + ' ' + meridiem;

    console.log('time ', timeHMS);
    this.setState({digitalTime: timeHM});
  }

  componentWillMount(){
    this.interval = setInterval(this.digitalTime, 1000);
    this.digitalTime();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return(
      <View>

        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.largeText}>TimeClock</Text>
            <Text style={styles.largeText}>{this.state.digitalTime}</Text>
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
  container: {
    paddingTop: 20,
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
