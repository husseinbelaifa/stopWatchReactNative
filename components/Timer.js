import React, {Component} from 'react';
import {Text,StyleSheet} from 'react-native';
import moment from 'moment';
const Timer=({interval})=>{

   

    const duration=moment.duration(interval);
    const centiSecond=Math.floor(duration.milliseconds()/10);
    return(
    <Text style={styles.timer}>
    {duration.minutes()}:{duration.seconds()},{centiSecond}
    </Text>
    );

}

const styles=StyleSheet.create({

    timer:{
        color:'#fff',
        fontSize: 76,
        fontWeight: '200',
    }

})
export default Timer

