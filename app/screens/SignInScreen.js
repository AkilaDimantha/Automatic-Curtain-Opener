import React,{useState,useEffect,useRef, useContext} from 'react';
import { ImageBackground, StyleSheet, View , StatusBar, Image, Text, TextInput} from 'react-native' ;
import { SocketContext } from '../Configs/websocket';
import StyledButton from '../components/StyledButton';




function SignInScreen({navigation}){

    const [user, setUser] = useState(null);
    
    const [serverMessages, setServerMessages] = useState([]);

    const ws = useContext(SocketContext);
  

     useEffect(() => {
         setServerMessages([])
         setUser(null)
        const serverMessagesList = []
        ws.onmessage = (e)=>{
           console.log(e.data)
           serverMessagesList.push(e.data);
           setServerMessages([...serverMessagesList])
        }
    

      }, [])
     useEffect(() => {
          const [finalmsg] = serverMessages.slice(-1)

          if (finalmsg){
            console.log(finalmsg)
            const msgContent = JSON.parse(finalmsg)
            if (msgContent.type == "connect" && msgContent.success == true){
                if(ws){

                    navigation.navigate('Home', {username : user})   ;
                }
            }
        }

      },[serverMessages])
    

      const onClick = () => {
        myJson = JSON.stringify({
            type:"connect", 
            message:{username: user}
            })
        ws.send(myJson );
           

       
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
        marginTop : '10%',
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
        position: 'absolute',
        marginTop : '75%',
        flexDirection : 'row',
    }
})
export default SignInScreen;