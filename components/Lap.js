import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import Timer from './Timer';
const Lap=({number,interval,fastest,slowest,timer})=>{

    const lapStyle=[styles.lapText,
        fastest && styles.fastest,
        slowest && styles.slowest

    ];

   

    return(
        <View style={styles.lap}>
            <Text style={lapStyle}>Lap {number}</Text>
            <Text style={lapStyle}>

               

                <Timer interval={interval}/>
         
            </Text>
        </View>
    );

}

const styles=StyleSheet.create({

  
    lapText:{

        color:'#fff',
        fontSize: 18,

    },

    lap:{
        flexDirection:'row',
        justifyContent:'space-between',
      borderColor: '#151515',
      borderTopWidth:1,

      paddingVertical: 10,

       
    },

    fastest:{
        color:'#4bc05f'
    },

    slowest:{
        color:'#cc3531'
    }

   

})

export default Lap;