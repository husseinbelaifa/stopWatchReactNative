/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Timer from './components/Timer';
import RoundButton from './components/RoundButton';
import ButtonRow from './components/ButtonRow';
import LapsTable from './components/LapsTable';
type Props = {};
export default class App extends Component<Props> {

  state={start:0,now:0,laps:[]}

  start=(newDate)=>{
    this.setState({start:newDate,now:newDate,laps:[0]});

  }

  componentDidMount(){
     if(this.state.start){

      setInterval(()=>{
        this.setState({now:new Date().getTime()})
      },100);

     }
   
  }

  componentDidUpdate(){

    if(this.state.start){

      setInterval(()=>{
        this.setState({now:new Date().getTime()})
      },100);

    }

  }
  render() {
    return (
      <View style={styles.container}>
        <Timer  interval={this.state.now-this.state.start} style={styles.timer}/>
        <ButtonRow>
        
       {startOrReset}
          <RoundButton disabled="false" title='Reset' color='#fff' backgroundColor='#1b361f'/>
          </ButtonRow>
          <LapsTable laps={this.state.laps} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0d0d0d',
    paddingTop: 130,
    paddingHorizontal: 20,
  },
  timer:{
    color:'#fff',
    fontSize: 76,
    fontWeight: '200',
}

 
 
});
