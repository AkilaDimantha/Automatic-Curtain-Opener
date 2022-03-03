import React,{useState,useEffect,useContext} from 'react';
import { View,Text,StyleSheet, TextInput , ActivityIndicator, KeyboardAvoidingView,
    ScrollView} from 'react-native';


import { SocketContext } from '../Configs/websocket';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view' ;

import StyledButton from '../components/StyledButton';





function WindowAdder({route,navigation}) {
    
    const {username} = route.params

    const [isLoading, setLoading ] = useState(true);
    const [curtain,setCurtain ] = useState({ location : '', openingHours : '', openingMinitues : '', closingHours : '', closingMinitues : '',  id: 0 });
    const [serverMessages, setServerMessages] = useState([]);
    const ws = useContext(SocketContext);

    useEffect(() => {
       const serverMessagesList = []
       ws.onmessage = (e)=>{
          // console.log(e.data)
          serverMessagesList.push(e.data);
          setServerMessages([...serverMessagesList])
       }
       
     }, [])

     useEffect(() => {
         const [finalmsg] = serverMessages.slice(-1)

         if (finalmsg){
           console.log(finalmsg)
           const msgContent = JSON.parse(finalmsg)
           if (msgContent.type == "add-curtain" && msgContent.success == true){
               if(ws){
                   navigation.navigate('Home')   ;
               }
           }
       }

     },[serverMessages])
   

     const onClick = () => {
       myJson = JSON.stringify({
           type:"add-curtain", 
           message:{username: username, location: curtain.location,
           curtainId : curtain.id,
           openTime:curtain.openingHours,
           closeTime : curtain.closingHours}
           })
       ws.send(myJson );
    
        }
    // useEffect (() => {
    //     fetch(dataUrl)
    //         .then((response) => response.json())
    //         .then((json) => {json.feeds.length == 0 ? (setWindowNumber(1)):(setWindowNumber(eval(json.feeds[0].field8) + 1))})
    //         .catch((error) => alert(error))
    //         .finally(() => setLoading(false));
    // },[]);

    

    return (
        <View style = {styles.container}>
          
                <View style = {styles.textcontainer} >
                    <Text style = {styles.title}>Window</Text>
                    <View style = {styles.locationContainer}>
                        <Text style = {styles.locationInputText} >Location</Text>
                        <TextInput 
                            style = {styles.locationInput}
                            onChangeText ={(value) => setCurtain(prevState => ({...prevState,location : value }))}
                            placeholder = 'e.g - Ground floor living room'
                            multiline/>
                    </View>
                    <View style = {styles.idContainer}>
                        <Text style = {styles.idInputText} >Curtain ID</Text>
                        <TextInput 
                            style = {styles.idInput}
                            onChangeText ={(value) => setCurtain(prevState => ({...prevState,id : value }))}
                            placeholder = 'e.g - 40404'
                            multiline/>
                    </View>
                    <Text style = {styles.openingTimeInputText} >Automatic Curtain Opening Time</Text>
                    <View style = {styles.openingTimeContainer}>
                        <View >
                        <TextInput
                            textAlign = 'center'
                            onChangeText ={(value) => setCurtain(prevState => ({...prevState,openingHours : value }))}
                            keyboardType = 'number-pad'
                            style = {styles.openingHoursInput}
                            placeholder = '08'
                            />
                        </View>
                        <Text style = {styles.openingColon}>:</Text>
                        <View>
                        <TextInput 
                            textAlign = 'center'
                            onChangeText ={(value) => setCurtain(prevState => ({...prevState,openingMinitues : value }))}
                            keyboardType = 'number-pad'
                            style = {styles.openingMinituesInput}
                            placeholder = '00'
                            />
                        </View>
                    </View>
                    <Text style = {styles.closingTimeInputText} >Automatic Curtain Closing Time </Text>
                    <View style = {styles.closingTimeContainer}>
                        <View >
                        <TextInput
                            textAlign = 'center'
                            onChangeText ={(value) => setCurtain(prevState => ({...prevState,closingHours : value }))}
                            keyboardType = 'number-pad'
                            style = {styles.closingHoursInput}
                            placeholder = '18'
                            />
                        </View>
                        <Text style = {styles.closingColon}>:</Text>
                        <View>
                        <TextInput 
                            textAlign = 'center'
                            onChangeText ={(value) => setCurtain(prevState => ({...prevState,closingMinitues: value }))}
                            keyboardType = 'number-pad'
                            style = {styles.closingMinituesInput}
                            placeholder = '10'
                            />
                        </View>
                    </View>
                    <View style = {styles.buttonContainer}>
                        <StyledButton 
                            type = 'primary'
                            content = 'OK'
                            onPress = {() => onClick()}/>
                    </View>
            </View>
            
        
        </View>
           
    );
}

const styles = StyleSheet.create({
    buttonContainer : {
        flex :1,
        justifyContent : 'flex-end',
        bottom: 20,
        width: '100%',
    },
    container : {
        backgroundColor : '#e6e6fa',
        flex : 1 ,
    },
    locationInput : {
        backgroundColor : '#fff',
        borderWidth: 1,
        borderColor : '#777',
        padding : '2%',
        marginTop : '7%',
        marginBottom : '7%',
        marginLeft : '5%',
        width : 250,
    },
    locationInputText: {
        marginTop : '13%',
    },
    locationContainer : {
        flexDirection : 'row',
    },
    openingColon: {
        marginTop : '7%'
    },
    openingTimeInputText: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom : '5%',
    },
    openingTimeContainer : {
        flexDirection : 'row',
        justifyContent : 'center',
    },
    openingHoursInput: {
        backgroundColor : '#fff',
        borderWidth: 1,
        borderColor : '#777',
        padding : '2%',
        marginTop : '10%',
        marginBottom : '10%',
        marginLeft : '5%',
        width : 125,
    },
    openingMinituesInput: {
        backgroundColor : '#fff',
        borderWidth: 1,
        borderColor : '#777',
        padding : '2%',
        marginTop : '10%',
        marginBottom : '10%',
        marginLeft : '5%',
        width : 125,
        
    },
    closingColon: {
        marginTop : '7%'
    },
    closingTimeInputText: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom : '6%',
        marginTop : '5%'
    },
    closingTimeContainer : {
        flexDirection : 'row',
        justifyContent : 'center',
        height: '35%',
    },
    closingHoursInput: {
        backgroundColor : '#fff',
        borderWidth: 1,
        borderColor : '#777',
        padding : '2%',
        marginTop : '10%',
        marginBottom : '10%',
        marginLeft : '5%',
        width : 125,
    },
    closingMinituesInput: {
        backgroundColor : '#fff',
        borderWidth: 1,
        borderColor : '#777',
        padding : '2%',
        marginTop : '10%',
        marginBottom : '10%',
        marginLeft : '5%',
        width : 125,
        
    },
    textcontainer : {
        flex : 1,
        alignItems : 'center',
        marginTop : '15%',
    },
    title : {
        fontSize: 40,
        fontWeight: '700',
    },
    timeInputText : {

    },
    idInput : {
        backgroundColor : '#fff',
        borderWidth: 1,
        borderColor : '#777',
        padding : '2%',
        marginTop : '5%',
        marginBottom : '7%',
        marginLeft : '5%',
        width : 250,
    },
    idInputText: {
        marginTop : '8%',
    },
    idContainer : {
        flexDirection : 'row',
    },
})

export default WindowAdder;