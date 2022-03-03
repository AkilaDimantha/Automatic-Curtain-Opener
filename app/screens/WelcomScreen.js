import React,{useState,useEffect,useRef} from 'react';
import { ImageBackground, StyleSheet, View , StatusBar, Image, Pressable} from 'react-native' ;

import StyledButton from '../components/StyledButton';

import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo'
function WelcomScreen({route,navigation}){

    useEffect(() => {

    navigation.dispatch(state => {
        // Remove the home route from the stack
        const routes = state.routes.filter(r => r.name !== 'SignInScreen');
      
        return CommonActions.reset({
          ...state,
          routes,
          index: routes.length - 1,
        });
      });
    }, [])

    const onClickLogOut = () => {
        console.log("Log Out")
    }

    const {username} = route.params
    return (
        <View style = {styles.container}>
           
            <ImageBackground 
                style = {styles.background}
                source = {require('../assets/WelcomScreenCurtain.jpg')}>
                <View style = {styles.logoutButtonContainer}>
                    <Pressable
                        style = {styles.logOutButton}
                        onPress = {() => navigation.navigate("SignInScreen")}>
                        <Image 
                            style = {styles.logOutPhoto}
                            source = {require('../assets/log_out.png')}/>
                    </Pressable>
                </View>
            
            <Image
                style = {styles.appIcon}
                source = {require('../assets/App_Icon.png')}
                />
            </ImageBackground>
            <View style = {styles.buttonContainer}>
                <StyledButton 
                    type = 'primary'
                    content = 'Add a window'
                    onPress = {() =>navigation.navigate('WindowAdder',{username : username})}/>
                <StyledButton 
                    type = 'primary'
                    content = 'Curtains'
                    onPress = {() => navigation.navigate('WindowsList',{username: username})}/>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logoutButtonContainer : {
        
        paddingRight : 15,
        height : '4%',
        flexDirection : 'column-reverse',
        alignItems : 'flex-end',
    },
    logOutButton: {
        paddingTop :30 ,
        width : 50,
        height :50,
    },
    logOutPhoto : {
        paddingTop :30 ,
        width : 50,
        height : 50,
    },
    appIcon : {
        position : 'absolute',
        marginTop : '15%',
        width : '100%',
        height : '35%'
    },
    background : {
        position: 'relative',
        flexDirection: 'column',
        flex : 1
    },
    buttonContainer: {
        position : 'absolute',
        width : '100%',
        bottom : 50,
    },
    container : {
        flex : 1 ,
        paddingTop : StatusBar.currentHeight,
        justifyContent : 'center'
    },
    logout : {
        marginTop:15,
        marginLeft : 15,
        height : '10%',
        width: '15%',
        flexDirection : 'column-reverse',
        alignItems : 'flex-end',
       
    },

})
export default WelcomScreen;

