import React from 'react';
import {View, StyleSheet} from 'react-native';

export class Grid extends React.Component {
  render(){
    return(
      <View>
        {this.props.children}
      </View>
    )
  }
}

export class Row extends React.Component {
  render(){
    return(
      <View style={styles.row}>
        {this.props.children}
      </View>
    )
  }
}

export class Col extends React.Component {
  render(){
    return(
      <View style={styles.col}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
    margin: 2,
  }
})
