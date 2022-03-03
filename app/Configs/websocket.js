    import {createContext} from "react"

export const ws = new WebSocket('ws://192.168.8.161:80');
    
    ws.onopen = () => {
         
        console.log("connection started")
      };
      ws.onclose = (e) => {
        console.log('Disconnected. Check internet or server.')
      };
      ws.onerror = (e) => {
        console.log(e.message);
      };
      ws.onmessage = (e) => {
        console.log(e.data)
      //   serverMessagesList.push(e.data);
      //   setServerMessages([...serverMessagesList])
      };

 export const   SocketContext = createContext(ws);

