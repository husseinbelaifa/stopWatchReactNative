import React from 'react';
import {StyleSheet,View,Text} from 'react-native'

const RoundButton=({title,color,backgroundColor})=>{

    return(
        <View style={[styles.button,{backgroundColor:backgroundColor}]}>
            <View style={styles.buttonBorder}>
            <Text style={[styles.buttonTitle,{color:color}]}>{title}</Text>
            </View>
        </View>
    );

}

const styles=StyleSheet.create({
    button:{
        width:80,
        height:80,
        borderRadius: 40,
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonTitle:{
        fontSize:18,

    },
    buttonBorder:{

        width:76,
        height:76,
        borderRadius:38,
        borderWidth: 2,
        justifyContent:'center',
        alignItems:'center'

    }
})

export default RoundButton;