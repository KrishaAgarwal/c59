import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0,
      buttonColor: 'skyblue'
    }
  }

  componentDidMount(){
    setInterval(this.incrementCounter, 1000);
  }
/*
  componentDidUpdate(){
    console.log(this.state.counter);
  }*/

  incrementCounter=()=>{
    this.setState({
      counter: this.state.counter+1
    })
  }

  changeColor=()=>{
    var num = '0123456789ABCDEF';
    var finalColor = '#';
    for(var i = 0;i < 6;i++){
      finalColor+=num[Math.floor(Math.random()*16)]
    }
    this.setState({
      buttonColor: finalColor
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ marginTop: 50, marginLeft: 170 }}>
          {this.state.counter}
        </Text>
        <Button title='watch me' color= {this.state.buttonColor}
         onPress={this.changeColor}/>
      </View>
    );
  }
}
