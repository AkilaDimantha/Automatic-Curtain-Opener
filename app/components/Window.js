import React from 'react';
import { View,Text,StyleSheet, TextInput, Pressable, Image,Dimensions} from 'react-native';

import StyledButton from './StyledButton';


function Window({curtain}) {

    const {closingHours,closingMinitues,location,openingHours,openingMinitues,windowNumber,navigation} = curtain ;


    return (
        <View style = {styles.container}>
                <View style = {styles.editButtonContainer}>
                    <Pressable
                        style = {styles.editButton}
                        onPress = {() => (navigation.navigate('WindowEditer',{closingHours : closingHours ,closingMinitues : closingMinitues,location: location,openingHours :openingHours ,openingMinitues : openingMinitues,windowNumber : windowNumber}))}>
                        <Image 
                            style = {styles.editPhoto}
                            source = {require('../assets/edit_logo_2.jpg')}/>
                    </Pressable>
                </View>
                <View style = {styles.textcontainer} >
                    <Text style = {styles.title}>Window {windowNumber}</Text>
                    <View style = {styles.locationContainer}>
                        <Text style = {styles.locationInputText} >Location</Text>
                        <TextInput 
                            editable = {false}
                            style = {styles.locationInput}
                            placeholder = {location}
                            placeholderTextColor = '#000000'
                            multiline/>
                    </View>
                    <Text style = {styles.openingTimeInputText} >Automatic Curtain Opening Time</Text>
                    <View style = {styles.openingTimeContainer}>
                        <View >
                        <TextInput
                            editable = {false}
                            placeholderTextColor = '#000000'
                            textAlign = 'center'
                            keyboardType = 'number-pad'
                            style = {styles.openingHoursInput}
                            placeholder = {openingHours}
                            />
                        </View>
                        <Text style = {styles.openingColon}>:</Text>
                        <View>
                        <TextInput 
                            editable = {false}
                            placeholderTextColor = '#000000'
                            textAlign = 'center'
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
                            editable = {false}
                            placeholderTextColor = '#000000'
                            textAlign = 'center'
                            keyboardType = 'number-pad'
                            style = {styles.closingHoursInput}
                            placeholder = {closingHours}
                            />
                        </View>
                        <Text style = {styles.closingColon}>:</Text>
                        <View>
                        <TextInput 
                            editable = {false}
                            placeholderTextColor = '#000000'
                            textAlign = 'center'
                            keyboardType = 'number-pad'
                            style = {styles.closingMinituesInput}
                            placeholder = {closingMinitues}
                            />
                        </View>
                    </View>
                    <View style = {styles.buttonContainer}>
                        <StyledButton 
                            type = 'secondary'
                            style = {styles.openButton}
                            content = 'Open'
                            onPress = {() => navigation.navigate('Home')}/>
                        <StyledButton 
                            type = 'secondary'
                            style = {styles.closeButton}
                            onPress = {() => navigation.navigate('Home')}
                            content = 'Close'
                            />
                    </View>
            </View>
        </View>
           
    );
}

const styles = StyleSheet.create({
    buttonContainer : {
        flex :1,
        flexDirection : 'row',
        justifyContent : 'flex-start',
        bottom: 50,
        width: '100%',
    },
    container : {
        backgroundColor : '#e6e6fa',
        height: Dimensions.get('window').height,
        flex : 1 ,
        justifyContent : 'center'
    },
    editButtonContainer : {
        paddingRight : 15,
        height : '4%',
        flexDirection : 'column-reverse',
        alignItems : 'flex-end',
    },
    editButton: {
        width : 50,
        height :50,
    },
    editPhoto : {
        width : 50,
        height : 50,
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
    openButton : {
        flex : 1,
        width : '45%'
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
    closeButton : {
        flex : 1,
        width : '45%'
    },
    closingColon: {
        marginTop : '7%'
    },
    closingTimeInputText: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom : '5%',
        marginTop : '3%'
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
        alignItems : 'center',
    },
    title : {
        fontSize: 40,
        fontWeight: '700',
    },
})

export default Window;