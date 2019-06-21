import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'

const RoundButton=({title,color,backgroundColor,disabled,onPressHandler})=>{
const newDate=new Date().getTime();
    return(
        <TouchableOpacity style={[styles.button,{backgroundColor:backgroundColor}]}
           onPress={()=> !disabled && onPressHandler && onPressHandler(newDate)}
           activeOpacity={disabled ? 1 :0.7}>
            <View style={styles.buttonBorder}>
            <Text style={[styles.buttonTitle,{color:color}]}>{title}</Text>
            
            </View>
        </TouchableOpacity>
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