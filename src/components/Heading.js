import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default class Heading extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      digitalTime: '',
      calendarDay: '',
    }
    this.time = this.time.bind(this);
  }

  ordinalize(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

  time(){
    // Digital Time
    const date = new Date();
    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    const meridiem = date.getHours() < 12 ? 'AM' : 'PM';
    if (hours > 12){
      hours -= 12;
    }
    if (hours == '00'){
      hours = '12'
    }
    const timeHM = hours + ":" + minutes + ' ' + meridiem;
    const timeHMS = hours + ":" + minutes + ":" + seconds + ' ' + meridiem;

    // calendarDay
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const day = days[date.getDay()]
    const month = months[date.getMonth()]
    const dateNumber = this.ordinalize(date.getDate());
    const timeCalendar = day + ' ' + dateNumber + ' ' + month;

    // Update state
    this.setState({
      digitalTime: timeHM,
      calendarDay: timeCalendar
    });
  }

  componentWillMount(){
    this.interval = setInterval(this.time, 1000);
    this.time();
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
            <Text style={styles.smallText}>{this.state.calendarDay}</Text>
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
