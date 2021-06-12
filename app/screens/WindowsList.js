import React,{useState,useEffect} from 'react';
import { View,StyleSheet, Dimensions, ActivityIndicator,FlatList,Text} from 'react-native';

import StyledButton from '../components/StyledButton';
import Window from '../components/Window';

const dataURL = 'https://api.thingspeak.com/channels/1373834/feeds.json?api_key=FMR8AWFRVK274X23'; 

function WindowsList({navigation}) {

    const [isLoading, setLoading ] = useState(true);
    const [data,setData] = useState([{}]);

    function helpingFilter(item){
        return {closingHours :item.field4.slice(0,item.field4.indexOf(":")), closingMinitues :item.field4.slice(item.field4.indexOf(":")+1), location : item.field2, openingHours :item.field3.slice(0,item.field3.indexOf(":")), openingMinitues :item.field3.slice(item.field3.indexOf(":")+1), windowNumber : item.field1, navigation : navigation}

    };

    const dataFilter = (props) => {
        return(
           props.map(helpingFilter)
        );
    };

    useEffect (() => {
        fetch(dataURL)
            .then((response) => response.json())
            .then((json) => setData(dataFilter(json.feeds)))
            .catch((error) => alert(error))
            .finally(() => setLoading(false));
    },[]);

    return (
        <View>
            {isLoading ? (<ActivityIndicator/> ):
               ( <View style = {styles.container}>
                    <FlatList
                        data = {data}
                        renderItem = {({item}) => (<Window curtain = {item}/>)}
                        showsVerticalScrollIndicator = {false}
                        keyExtractor={(item, index) => index.toString()}
                        snapToAlignment = {'start'}
                        decelerationRate = {'fast'}
                        snapToInterval = {Dimensions.get('window').height}
                     />
                </View>
               )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width : '100%',
    
    }
    
})
export default WindowsList;


