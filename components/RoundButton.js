import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'


const RoundButton=({title,color,backgroundColor,disabled,onPressHandler,onResetHandler,onStopHandler,onLapHandler,onResumeHandler})=>{
const newDate=new Date().getTime();

let viewStart=null;

if(title==='Start'){

    viewStart=(<TouchableOpacity style={[styles.button,{backgroundColor:backgroundColor}]}
        onPress={()=>  onPressHandler && onPressHandler(newDate)}
        
        activeOpacity={disabled ? 1 :0.7}>
         <View style={styles.buttonBorder}>
         <Text style={[styles.buttonTitle,{color:color}]}>{title}</Text>
         
         </View>
        </TouchableOpacity>);
}

if(title==='Reset'){
    viewStart=(
   

        <TouchableOpacity style={[styles.button,{backgroundColor:backgroundColor}]}
        onPress={()=>  onResetHandler && onResetHandler()}
        
        activeOpacity={disabled ? 1 :0.7}>
         <View style={styles.buttonBorder}>
         <Text style={[styles.buttonTitle,{color:color}]}>{title}</Text>
         
         </View>
        </TouchableOpacity>
        
        )


}

if(title==='Resume'){
    viewStart=(
   

        <TouchableOpacity style={[styles.button,{backgroundColor:backgroundColor}]}
        onPress={()=>  onResumeHandler && onResumeHandler()}
        
        activeOpacity={disabled ? 1 :0.7}>
         <View style={styles.buttonBorder}>
         <Text style={[styles.buttonTitle,{color:color}]}>{title}</Text>
         
         </View>
        </TouchableOpacity>
        
        )


}

   if(title==='Stop'){

      viewStart=(
   

        <TouchableOpacity style={[styles.button,{backgroundColor:backgroundColor}]}
        onPress={()=> onStopHandler && onStopHandler()}
        
        activeOpacity={disabled ? 1 :0.7}>
         <View style={styles.buttonBorder}>
         <Text style={[styles.buttonTitle,{color:color}]}>{title}</Text>
         
         </View>
        </TouchableOpacity>
        
        )

   }

   if(title==='Lap'){
    viewStart=(
   

        <TouchableOpacity style={[styles.button,{backgroundColor:backgroundColor}]}
        onPress={()=> onLapHandler && onLapHandler()}
        
        activeOpacity={disabled ? 1 :0.7}>
         <View style={styles.buttonBorder}>
         <Text style={[styles.buttonTitle,{color:color}]}>{title}</Text>
         
         </View>
        </TouchableOpacity>
        
        )
   }



    return(
        viewStart
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