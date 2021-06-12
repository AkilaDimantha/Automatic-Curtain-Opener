import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';


import StyledButton from '../components/StyledButton';


function Calibration({navigation }) {

    return (
        <View  style = {styles.container}>
            <View style = {styles.textContainer}>
                <Text style = {styles.text} >
                    The calibration process has begun. Please press stop button when the curtain is fully closed.
                </Text>
            </View>
            <Image
                style = {styles.cogWheelImage}
                source = {require('../assets/cog_wheel.jpg')}/>
            <View style = {styles.buttonContainer}>
                <StyledButton 
                    type = 'primary'
                    content = 'STOP'
                    onPress = {() => navigation.navigate('Home') }/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background : {
        height : 400,
        width : 400
    },
    buttonContainer : {
        flex :1,
        justifyContent : 'flex-end',
        bottom: 50,
        width: '100%',
    },
    container : {
        flex : 1 ,
        backgroundColor : '#e6e6fa',
        alignItems : 'center'
    },
    cogWheelImage: {
        width : 400,
        height : 400
    },
    textContainer : {
        marginLeft : '5%',
        marginRight : '5%',
        marginTop : '30%',
        justifyContent : 'center',
        alignItems : 'center'
    },
    text : {
        fontSize: 20,
        fontWeight: '500',
    }
    
})

export default Calibration;