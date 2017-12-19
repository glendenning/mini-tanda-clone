import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Feather from 'react-native-vector-icons/Feather';
import _ from 'lodash';

import {Grid, Row, Col} from './Grid';

export default class NumberPad extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      passcode: [null, null, null, null],
    }
    // bind(this) allows these functions to have access to state
    this.isPasscodeNull = this.isPasscodeNull.bind(this);
    this.addNumber = this.addNumber.bind(this);
    this.takeNumber = this.takeNumber.bind(this);
    this.clearPasscode = this.clearPasscode.bind(this);
  }

  login(){
    Actions.tabbar({type: 'replace'})
  }

  isPasscodeNull(passcode){
    var isNull = true;
    for (var i = 0; i < passcode.length; i++) {
      if (passcode[i]){
        isNull = false;
      }
    }
    return isNull;
  }

  addNumber(pressedNumber){
    var passcode = this.state.passcode;
    var newIndex;
    // find the lowest index that is null
    for (var i = 0; i < passcode.length; i++) {
      if (!passcode[i]){
        newIndex = i;
        break;
      }
    }
    passcode[newIndex] = pressedNumber;
    this.setState({passcode})
    if (newIndex + 1 == passcode.length){
      setTimeout(function(){
        Actions.tabbar({type: 'reset'})
      }, 500);
    }
  }

  takeNumber(){
    console.log('taking number');
    var passcode = this.state.passcode;
    var newIndex = 0;
    // find the highest index that isn't null
    for (var i = 0; i < passcode.length; i++){
      if (passcode[i]){
        newIndex = i;
      }
    }
    passcode[newIndex] = null;
    this.setState({passcode})
  }

  clearPasscode(){
    console.log
    const passcode = this.state.passcode.map(number => {
      return null
    })
    this.setState({passcode});
  }

  render(){
    return(
      <View style={styles.container}>

        <View style={styles.passcodeContainer}>
          {this.isPasscodeNull(this.state.passcode) ?
            <View style={styles.promptContainer}>
              <Text style={styles.promptText}>Please enter your passcode</Text>
            </View>
            :
            null
          }

          <Grid>
            <Row>
              {this.state.passcode.map((number, i) => (
                  <Col key={i}>
                    {number ?
                      <View style={styles.passcodeDigitContainer}>
                        <Text style={styles.passcodeDigitText}>{number}</Text>
                      </View>
                      :
                      <View style={styles.passcodeEmptyContainer}>
                        <Text style={styles.passcodeDigitText}></Text>
                      </View>
                    }
                  </Col>
                ))
              }
            </Row>
          </Grid>
        </View>

        <Grid>

          <Row>
            <Col>
              <TouchableOpacity style={styles.digitButton} onPress={() => this.addNumber(1)}>
                <Text style={styles.digitText}>1</Text>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity style={styles.digitButton} onPress={() => this.addNumber(2)}>
                <Text style={styles.digitText}>2</Text>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity style={styles.digitButton} onPress={() => this.addNumber(3)}>
                <Text style={styles.digitText}>3</Text>
              </TouchableOpacity>
            </Col>
          </Row>

          <Row>
            <Col>
              <TouchableOpacity style={styles.digitButton} onPress={() => this.addNumber(4)}>
                <Text style={styles.digitText}>4</Text>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity style={styles.digitButton} onPress={() => this.addNumber(5)}>
                <Text style={styles.digitText}>5</Text>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity style={styles.digitButton} onPress={() => this.addNumber(6)}>
                <Text style={styles.digitText}>6</Text>
              </TouchableOpacity>
            </Col>
          </Row>

          <Row>
            <Col>
              <TouchableOpacity style={styles.digitButton} onPress={() => this.addNumber(7)}>
                <Text style={styles.digitText}>7</Text>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity style={styles.digitButton} onPress={() => this.addNumber(8)}>
                <Text style={styles.digitText}>8</Text>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity style={styles.digitButton} onPress={() => this.addNumber(9)}>
                <Text style={styles.digitText}>9</Text>
              </TouchableOpacity>
            </Col>
          </Row>

          <Row>
            <Col>
              <TouchableOpacity style={styles.clearButton} onPress={this.clearPasscode}>
                <Text style={styles.clearText}>CLEAR</Text>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity style={styles.digitButton} onPress={() => this.addNumber(0)}>
                <Text style={styles.digitText}>0</Text>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity style={styles.clearButton} onPress={this.takeNumber}>
                <Text style={styles.clearText}>
                  <Feather name={'delete'} size={25} color={'white'}/>
                </Text>
              </TouchableOpacity>
            </Col>
          </Row>

        </Grid>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  passcodeContainer: {
    marginHorizontal: 30,
    marginVertical: 50,
  },
  promptContainer: {
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
  },
  promptText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  passcodeDigitContainer: {
    height: 45,
    borderBottomWidth: 5,
    borderBottomColor: 'white',
    margin: 1,
    alignItems: 'center',
  },
  passcodeEmptyContainer: {
    height: 45,
    borderBottomWidth: 5,
    borderBottomColor: 'rgb(136, 154, 178)',
    margin: 1,
    alignItems: 'center',
  },
  passcodeDigitText: {
    fontSize: 30,
    color: 'white',
  },
  digitButton: {
    backgroundColor: 'rgb(53, 59, 69)',
    alignItems: 'center',
    height: 40,
    margin: 5
  },
  digitText: {
    fontSize: 30,
    color: 'white',
  },
  clearButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    margin: 5,
  },
  clearText: {
    color: 'white',
    fontSize: 16,
  },
})
