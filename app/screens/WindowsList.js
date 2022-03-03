import React,{useState,useEffect,useContext} from 'react';
import { View,StyleSheet, Dimensions, ActivityIndicator,FlatList,Text} from 'react-native';

import StyledButton from '../components/StyledButton';
import Window from '../components/Window';

import { SocketContext } from '../Configs/websocket';


function WindowsList({route,navigation}) {

    const {username} = route.params

    const ws = useContext(SocketContext);

    const [isLoading, setLoading ] = useState(true);
    const [serverMessages, setServerMessages] = useState([]);
    const [data,setData] = useState([{}]);
    function helpingFilter(item){
        return {closingHours :item.closeTime, closingMinitues :"00", location : item.location, openingHours :item.openTime, openingMinitues : "00", windowNumber : item.curtainId, navigation : navigation, username:username}

    };

    const dataFilter = (props) => {
        return(
           props.map(helpingFilter)
        
        );
    };

    useEffect(() => {
        const serverMessagesList = []
        myJson = JSON.stringify({
            type:"get-curtains", 
            message:{username: username}
            })
        ws.send(myJson );
        ws.onmessage = (e)=>{
           serverMessagesList.push(e.data);
           setServerMessages([...serverMessagesList])
        }
        
      }, [])
 
      useEffect(() => {
          const [finalmsg] = serverMessages.slice(-1)
 
          if (finalmsg){
            
            const msgContent = JSON.parse(finalmsg)
            console.log(msgContent)
            if (msgContent.type == "get-curtains" && msgContent.success == true){
                if(ws){
                
                    setData(dataFilter(msgContent.message));
                    setLoading(false);
                }
            }
        }
 
      },[serverMessages])
    



    // useEffect (() => {
    //     fetch(dataURL)
    //         .then((response) => response.json())
    //         .then((json) => setData(dataFilter(json.feeds)))
    //         .catch((error) => alert(error))
    //         .finally(() => setLoading(false));
    // },[]);

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


