
import { useEffect, useState } from 'react';

import { Button,FormControl,Input,InputLabel } from '@material-ui/core';

import './App.css';
import Message from './Message'; 

import db from './firebase';
import firebase from 'firebase';

import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

import { IconButton } from '@material-ui/core';

import images from './images/messenger.png'







function App() {
    
  const [input,setInput] = useState('')
  const [messages,setMessages] = useState([])
  const [username,setUsername] = useState('')


  



  // ata hbe

  useEffect(() =>{
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc =>
     ({id: doc.id,message: doc.data()})))
    })
  },[])
 


  useEffect(() => {
    setUsername(prompt('please eneter your name'));
  },[]);
   
  


  // ata korbe 
  const sendmessage = (event) => { 

        db.collection('messages').add({
          message: input,
          username: username,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()

        })
    setInput('');

    event.preventDefault();
  }


  return (
    <div className="App">

<img style={{height:'5rem'}} src={images} alt="" /> 

      <h1> Hello Clever Programmers! </h1>
      <h2> welcome {username} </h2> 

      <form className="app_form"> 

      <FormControl className="app_formcontrol">
          <InputLabel >Enter a message...</InputLabel>
          <Input className="app_icon" placeholder='Enter a message...' value={input} onChange={event => 
            setInput(event.target.value)} type="text" />


          <IconButton className="app_iconButton" disabled={!input} varient="contained" color="primary" type="submit"  onClick={sendmessage}>
         
            <SendIcon/>
          </IconButton>



     </FormControl>

      </form> 

      <FlipMove>
  
   
       { 
         messages.map(({id, message}) => (
           <Message key={id} username={username} message={message}/>
         ))
       }

    </FlipMove>

    </div>





  );
}

export default App;
