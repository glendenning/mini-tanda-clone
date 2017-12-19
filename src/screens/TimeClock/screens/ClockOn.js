import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import Heading from '../../../components/Heading';
import LogOutBar from '../../../components/LogOutBar';

export default class ClockOn extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      clockedIn: false
    }
    this.alternate = this.alternate.bind(this);
  }

  alternate(){
    this.setState({clockedIn: !this.state.clockedIn})
  }

  render(){
    const clockedIn = this.state.clockedIn;
    return(
      <View style={styles.container}>
        <Heading />
        <LogOutBar />
        <View>
          <Image
            source={require('../assets/demo.jpeg')}
            style={styles.camera}
          />
          <View style={styles.messageContainer}>
            {
              new Date().getHours() > 12 ?
                <Text style={styles.messageSmall}>Good afternoon, John Smith</Text>
                :
                <Text style={styles.messageSmall}>Good morning, John Smith</Text>
            }
            {
              this.state.clockedIn ?
                <Text style={styles.messageLarge}>You are currently
                  <Text style={{fontWeight: 'bold'}}> clocked in</Text>
                </Text>
                :
                <Text style={styles.messageLarge}>You are currently
                  <Text style={{fontWeight: 'bold'}}> clocked out</Text>
                </Text>
            }
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[clockedIn ? styles.smallButton : styles.bigButton, styles.clockIn]} onPress={this.alternate}>
              <Text style={[clockedIn ? styles.smallButtonText : styles.bigButtonText]}>Clock In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[clockedIn ? styles.bigButton : styles.smallButton, styles.clockOut]} onPress={this.alternate}>
              <Text style={[clockedIn ? styles.bigButtonText : styles.smallButtonText]}>Clock Out</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(71, 80, 92)',
  },
  camera: {
    height: 200,
    width: 200,
    marginTop: 70,
    marginBottom: 5,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'white',
    alignSelf: 'center',
  },
  messageContainer: {
    alignItems: 'center',
  },
  messageSmall: {
    fontSize: 14,
    color: 'white',
  },
  messageLarge: {
    fontSize: 19,
    color: 'white',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  bigButton: {
    width: '70%',
    padding: 20,
    margin: 5,
    borderRadius: 6,
    alignItems: 'center',
  },
  smallButton: {
    width: '50%',
    padding: 10,
    margin: 5,
    borderRadius: 6,
    alignItems: 'center',
  },
  bigButtonText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  smallButtonText: {
    color: 'white',
    fontSize: 18,
  },
  clockIn: {
    backgroundColor: 'rgb(156, 222, 60)',
  },
  clockOut: {
    backgroundColor: 'rgb(201, 35, 35)',
  },
  bold: {
    fontWeight: 'bold',
  }
})
