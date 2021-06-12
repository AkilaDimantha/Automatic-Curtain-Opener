import React from 'react';
import { ImageBackground, StyleSheet, View , StatusBar, Image} from 'react-native' ;

import StyledButton from '../components/StyledButton';

function WelcomScreen({navigation}){
    return (
        <View style = {styles.container}>
            <ImageBackground 
                style = {styles.background}
                source = {require('../assets/WelcomScreenCurtain.jpg')}>
            <Image
                style = {styles.appIcon}
                source = {require('../assets/App_Icon.png')}
                />
            </ImageBackground>
            <View style = {styles.buttonContainer}>
                <StyledButton 
                    type = 'primary'
                    content = 'Add a window'
                    onPress = {() => navigation.navigate('WindowAdder')}/>
                <StyledButton 
                    type = 'primary'
                    content = 'Curtains'
                    onPress = {() => navigation.navigate('WindowsList')}/>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appIcon : {
        position : 'absolute',
        marginTop : '15%',
        width : '100%',
        height : '35%'
    },
    background : {
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
    }

})
export default WelcomScreen;

