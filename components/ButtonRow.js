import React from 'react';
import {View,StyleSheet} from 'react-native';


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
       justifyContent:'space-between',
       marginBottom: 30,
    }
    
});

export default  ButtonRow;