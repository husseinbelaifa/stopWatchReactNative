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
    this.timer=setInterval(()=>{
      this.setState({now:new Date().getTime()})
    },100);


  }

  reset=()=>{
    this.setState({start:0,now:0,laps:[],timerStopped:0});
  }

  resume=()=>{

    const newDate=new Date().getTime();

    this.setState({start:newDate,now:newDate})

    this.timer=setInterval(()=>{
      this.setState({now:new Date().getTime()})
    },100);


  }

  stop=()=>{

   
    clearInterval(this.timer);
    this.setState({timerStopped:this.state.now-this.state.start})
    this.setState({start:0,now:0});

  }

  lap=()=>{
    this.setState({laps:[this.state.now-this.state.start,...this.state.laps]});
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  
  render() {
 
    return (
      <View style={styles.container}>
        <Timer  interval={this.state.timerStopped ? (this.state.now-this.state.start)+this.state.timerStopped :  this.state.now-this.state.start} style={styles.timer}/>
      

          {this.state.laps.length===0 && (

<ButtonRow>

<RoundButton title='Start' color='#50d167' backgroundColor='#1b361f' onPressHandler={this.start}/>
<RoundButton title='Reset' onResetHandler={this.reset}    color='#FFFFFF' backgroundColor='#3D3D3D'/>

</ButtonRow>)
          
          
          }
        
        {this.state.start>0 && (

<ButtonRow>
<RoundButton title='Stop' color='#e33935' backgroundColor='#3c1715' onStopHandler={this.stop}/>
 <RoundButton title='Lap'    color='#FFFFFF' backgroundColor='#3D3D3D' onLapHandler={this.lap}/>
</ButtonRow>

        )}

{this.state.laps.length>0 && this.state.start===0 &&  (

<ButtonRow>

<RoundButton title='Resume' color='#50d167' backgroundColor='#1b361f' onResumeHandler={this.resume}/>
<RoundButton title='Reset' onResetHandler={this.reset}    color='#FFFFFF' backgroundColor='#3D3D3D'/>

</ButtonRow>)
          
          
          }
         
     
          <LapsTable laps={this.state.laps} timer= {this.state.timerStopped ? (this.state.now-this.state.start)+this.state.timerStopped :  this.state.now-this.state.start} />
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