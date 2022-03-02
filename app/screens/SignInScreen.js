import React,{useState,useEffect,useRef} from 'react';
import { ImageBackground, StyleSheet, View , StatusBar, Image, Text, TextInput} from 'react-native' ;

import StyledButton from '../components/StyledButton';




function SignInScreen({navigation}){

    const [user, setUser] = useState('');
    const [serverState, setServerState] = useState('Loading...');
    const [messageText, setMessageText] = useState('');
    
    const [inputFieldEmpty, setInputFieldEmpty] = useState(true);
    const [serverMessages, setServerMessages] = useState([]);
    const [wsState, setWs] = useState(null);

    

     useEffect(() => {
        const serverMessagesList = []

        const ws = new WebSocket('ws://192.168.8.129:5000');

        setWs(ws)

        ws.onopen = () => {
          setServerState('Connected to the server')
        };
        ws.onclose = (e) => {
          setServerState('Disconnected. Check internet or server.')
        };
        ws.onerror = (e) => {
          setServerState(e.message);
        };
        ws.onmessage = (e) => {
          serverMessagesList.push(e.data);
          setServerMessages([...serverMessagesList])
        };
      }, [])

      const onClick = () => {
        myJson = JSON.stringify({
            type:"connect", 
            message:{username: user}
            })
        wsState.send(myJson );
            if(wsState){
                const ws1 = wsState
                navigation.navigate('Home', {"webSocketObject" : ws1 })   ;
            }


       
      }
      
    return (
        <View style = {styles.container}>
            <ImageBackground 
                style = {styles.background}
                source = {require('../assets/AppBackground.jpg')}>
                <Image
                style = {styles.appIcon}
                source = {require('../assets/App_Icon.png')}
                />
            </ImageBackground> 
            <View style = {styles.userContainer}>
                <Text style = {styles.userInputText} >User Name</Text>
                <TextInput 
                    style = {styles.userNameInput}
                    onChangeText ={(value) => setUser(value)}
                    placeholder = "Type your user name"
                    multiline/>
            </View>
            <View style = {styles.buttonContainer}>
                <StyledButton 
                    type = 'primary'
                    content = 'Curtains'
                    onPress = {() => onClick() } />
                
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
    },
    locationInput : {
        backgroundColor : '#fff',
        borderWidth: 1,
        borderColor : '#777',
        padding : '2%',
        marginTop : '10%',
        marginBottom : '10%',
        marginLeft : '5%',
        width : 250,
    },
    userInputText: {
        marginTop : '13%',
    },
    userContainer : {
        flexDirection : 'row',
    }
})
export default SignInScreen;