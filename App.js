/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

var  colors = ['#3034BA', '#325D3C', '#B6D92B',
 '#EFD719', '#151201', 'red',
 'white','yellow','pink',
 '#E0123E','#93898B','#23E6C6',
 'magenta','blue','silver'];





export default class App extends Component {

  constructor(){
    super()
    this.state = {
      color: 'black',
      color2: 'black',
      color3: 'black',
      color4: 'black',
     }
   }

   _changeStyle() {
    var color = colors[Math.floor(Math.random() * colors.length)];
    this.setState({
        color: color,
    })
    }

     _changeStyle2() {
      var color = colors[Math.floor(Math.random() * colors.length)];
      this.setState({
          color2: color,
      })
      }
      _changeStyle3() {
        var color = colors[Math.floor(Math.random() * colors.length)];
        this.setState({
            color3: color,
        })
        }
        _changeStyle4() {
      var color = colors[Math.floor(Math.random() * colors.length)];
      this.setState({
          color4: color,
      })
      }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flexBox1}>
        <View style={styles.containerTwo}>
        <TouchableOpacity
        onPress={() => this._changeStyle()}>
            <Text style = {styles.textButton}> mygtukas1 </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this._changeStyle2()}>
            <Text style = {styles.textButton}> mygtukas2 </Text>
        </TouchableOpacity>
          </View>
          <View style={styles.containerThree}>
        <TouchableOpacity
          onPress={() => this._changeStyle3()}>
            <Text style = {styles.textButton}> mygtukas3 </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this._changeStyle4()}>
            <Text style = {styles.textButton}> mygtukas4 </Text>
        </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flexBox2}>
            <Text style = {{ marginTop:10,
    borderWidth: 3,
    padding:5,
    width:150,
    textAlign: 'center',
    fontSize: 26,
    marginLeft: 95,
    borderColor: '#101254',
    color: this.state.color }}> spalva1 </Text>
             <Text style = {{ marginTop:10,
    borderWidth: 3,
    padding:5,
    width:150,
    textAlign: 'center',
    fontSize: 26,
    marginLeft: 95,
    borderColor: '#101254',
    color: this.state.color2 }}> spalva2 </Text>
            <Text style = {{ marginTop:10,
    borderWidth: 3,
    padding:5,
    width:150,
    textAlign: 'center',
    fontSize: 26,
    marginLeft: 95,
    borderColor: '#101254',
    color: this.state.color3 }}> spalva3 </Text>
            <Text style = {{ marginTop:10,
    borderWidth: 3,
    padding:5,
    width:150,
    textAlign: 'center',
    fontSize: 26,
    marginLeft: 95,
    borderColor: '#101254',
    color: this.state.color4 }}> spalva4 </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
  },
  containerTwo: {
    flex:2,
    flexDirection: 'row',
  },
  containerThree: {
    flex:2,
    flexDirection: 'row',
  },
  flexBox1: {
    flex: 1,
    backgroundColor: 'blue',

  },
  flexBox2: {
    flex:1,
    backgroundColor:'#0B10A1',
  },
  textButton:{
    marginTop:35,
    borderWidth: 5,
    padding:5,
    width:150,
    textAlign: 'center',
    fontSize: 26,
    marginLeft: 20,
    borderColor: '#101254',
    backgroundColor: '#5559F0',
    color: 'white'
  },
});
