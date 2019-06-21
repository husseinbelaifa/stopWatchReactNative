import React from 'react';
import {View,StyleSheet} from 'react-native';
import RoundButton from './RoundButton';

const ButtonRow=({children})=>{

    return(
        <View style={styles.ButtonRow}>
          {children}
        </View>
    );



}

const styles=StyleSheet.create({

    ButtonRow:{
       flexDirection:'row',
       alignSelf: 'stretch',
       justifyContent:'space-between'
    }
    
});

export default  ButtonRow;