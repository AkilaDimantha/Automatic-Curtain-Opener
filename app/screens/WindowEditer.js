import React,{useState} from 'react';
import { View,Text,StyleSheet, TextInput } from 'react-native';
import Axios from 'axios';

import StyledButton from '../components/StyledButton';



function WindowEditer({route,navigation}) {


    const {closingHours,closingMinitues,location,openingHours,openingMinitues,windowNumber} = route.params

    const [curtain,setCurtain ] = useState({ location : '', openingHours : '', openingMinitues : '', closingHours : '', closingMinitues : '', numberOfWindows : 0 });

    

    return (
        <View style = {styles.container}>
            
                <View style = {styles.textcontainer} >
                    <Text style = {styles.title}>Window {windowNumber}</Text>
                    <View style = {styles.locationContainer}>
                        <Text style = {styles.locationInputText} >Location</Text>
                        <TextInput 
                            style = {styles.locationInput}
                            onChangeText ={(value) => setCurtain(prevState => ({...prevState,location : value }))}
                            placeholder = {location}
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
                            placeholder = {openingHours}
                            />
                        </View>
                        <Text style = {styles.openingColon}>:</Text>
                        <View>
                        <TextInput 
                            textAlign = 'center'
                            onChangeText ={(value) => setCurtain(prevState => ({...prevState,openingMinitues : value,numberOfWindows : windowNumber }))}
                            keyboardType = 'number-pad'
                            style = {styles.openingMinituesInput}
                            placeholder = {openingMinitues}
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
                            placeholder = {closingHours}
                            />
                        </View>
                        <Text style = {styles.closingColon}>:</Text>
                        <View>
                        <TextInput 
                            textAlign = 'center'
                            onChangeText ={(value) => setCurtain(prevState => ({...prevState,closingMinitues: value }))}
                            keyboardType = 'number-pad'
                            style = {styles.closingMinituesInput}
                            placeholder = {closingMinitues}
                            />
                        </View>
                    </View>
                    <View style = {styles.buttonContainer}>
                        <StyledButton 
                            type = 'primary'
                            content = 'OK'
                            onPress = {() => {navigation.navigate('Home')}}/>
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

export default WindowEditer;