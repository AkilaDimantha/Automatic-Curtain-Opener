import React from 'react';
import {StyleSheet, Pressable, Text, View } from 'react-native';



function StyledButton(props) {

    const {type,content,onPress} = props;
    const buttonWidth = type === 'primary' ? '100%' : '50%';

    return (

        <View style = {[styles.container,{width : buttonWidth}]}>
            <Pressable 
                style = {styles.button}
                onPress = {() => onPress()}>
                <Text style = {styles.text}>{content}</Text>
            </Pressable>
        </View>
    );
}



const styles = StyleSheet.create({
    button : {
        backgroundColor : '#e0ffff',
        height : 40,
        borderRadius : 20 ,
        justifyContent : 'center' ,
        alignItems : 'center'
    },
    container : {
        padding : 10 ,
    },
    text : {
        fontSize: 12,
        fontWeight:'500',
        textTransform: 'uppercase',
    }
})

export default StyledButton;