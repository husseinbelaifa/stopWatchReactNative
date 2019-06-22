import React from 'react';
import {StyleSheet,View,ScrollView} from 'react-native';
import Lap from './Lap';
const LapsTable=({laps,timer})=>{

    // alert(laps)

    const finishedLaps=laps.slice(1);
    

    const min=Math.max(...finishedLaps);
    const max=Math.min(...finishedLaps);

    const lapsView=laps.map((lap,index)=>{
       
           return <Lap slowest={lap===min} fastest={lap===max} key={laps.length-index} number={laps.length-index} interval={index===0 && timer ? timer : lap} />
    })

    return(
        <ScrollView style={styles.ScrollView}>
            {lapsView}
        </ScrollView>
    );

}

const styles=StyleSheet.create({

    ScrollView:{
        alignSelf:'stretch'
    }

})

export default LapsTable;