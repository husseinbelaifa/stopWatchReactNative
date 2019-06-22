import React, {Component} from 'react';
import {Text,StyleSheet} from 'react-native';
import moment from 'moment';
const Timer=({interval,style})=>{

    const pad=(n)=>n<10?`0${n}`:n

   

    const duration=moment.duration(interval);
    const centiSecond=Math.floor(duration.milliseconds()/10);
    return(
    <Text style={style}>
    {pad(duration.minutes())}:{pad(duration.seconds())},{pad(centiSecond)}
    </Text>
    );

}

const styles=StyleSheet.create({

    timer:{
        color:'#fff',
        fontSize: 76,
        fontWeight: '200',
    },

    fastest:{
        color:'#4bc05f'
    },

    slowest:{
        color:'#cc3531'
    }


})
export default Timer

