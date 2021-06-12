import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet, TextInput , ActivityIndicator} from 'react-native';
import Axios from 'axios';

import StyledButton from '../components/StyledButton';

const dataUrl = 'https://api.thingspeak.com/channels/1373834/fields/8.json?api_key=FMR8AWFRVK274X23&results=1';



function WindowAdder({navigation}) {

    

    const [isLoading, setLoading ] = useState(true);
    const [windowNumber, setWindowNumber] = useState(0);
    const [curtain,setCurtain ] = useState({ location : '', openingHours : '', openingMinitues : '', closingHours : '', closingMinitues : '', numberOfWindows : 0 });

    useEffect (() => {
        fetch(dataUrl)
            .then((response) => response.json())
            .then((json) => {json.feeds.length == 0 ? (setWindowNumber(1)):(setWindowNumber(eval(json.feeds[0].field8) + 1))})
            .catch((error) => alert(error))
            .finally(() => setLoading(false));
    },[]);

    

    return (
        <View style = {styles.container}>
            {isLoading ? (<ActivityIndicator/> ):
                (<View style = {styles.textcontainer} >
                    <Text style = {styles.title}>Window {windowNumber}</Text>
                    <View style = {styles.locationContainer}>
                        <Text style = {styles.locationInputText} >Location</Text>
                        <TextInput 
                            style = {styles.locationInput}
                            onChangeText ={(value) => setCurtain(prevState => ({...prevState,location : value }))}
                            placeholder = 'e.g - Ground floor living room'
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
                            onChangeText ={(value) => setCurtain(prevState => ({...prevState,openingMinitues : value,numberOfWindows : windowNumber }))}
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
                            onPress = {() => {navigation.navigate('Calibration'),Axios.post('https://api.thingspeak.com/update?api_key=FOW5V50MX448DL8N',{"field1" : curtain.numberOfWindows , "field2" : curtain.location, "field3" : curtain.openingHours + ':' + curtain.openingMinitues, "field4" : curtain.closingHours + ':' + curtain.closingMinitues, "field5" : 0, "field7" : 1,"field8" : windowNumber})}}/>
                    </View>
            </View>
            )}
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
        marginTop : '10%',
        marginBottom : '10%',
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
        marginTop : '25%',
    },
    title : {
        fontSize: 40,
        fontWeight: '700',
    },
    timeInputText : {

    },
})

export default WindowAdder;