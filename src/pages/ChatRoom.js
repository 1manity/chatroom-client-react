import React, {useState, useEffect, useRef} from 'react';
import {Button, TextField} from "@mui/material";

function ChatRoom(){
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const socketRef = useRef(null);
    useEffect(() => {
        socketRef.current = new WebSocket('ws://127.0.0.1:33459/ws');

        socketRef.current.onopen = () => {
            console.log('WebSocket connected');
        };

        socketRef.current.onmessage = (event) => {
            console.log(event.data)

            const message = JSON.parse(event.data);
            setMessages((prevMessages) =>[...prevMessages, {...message,id:`${message.sender}-${message.timestamp}`}]);

        };

        socketRef.current.onclose = () => {
            console.log('WebSocket closed');
        };

        return () => {
            socketRef.current.close();
        };
    }, [socketRef]);

    const handleSendMessage = () => {
        if (newMessage.trim() === '') {
            return;
        }
        console.log(Math.floor(Date.now()))
        const message = {
            type: "chat",
            content: newMessage,
            sender:"",
            timestamp:Math.floor(Date.now())
        };
        socketRef.current.send(JSON.stringify(message));
        setNewMessage('');
    };

    return (
        <div>

            <TextField
                id="outlined-basic" label="Outlined" variant="outlined" defaultValue="Small" size="small"
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button variant="outlined" onClick={handleSendMessage}>Send</Button>
            <div>
                {messages.map((message, index) => (
                    <div key={message.id}>{message.content}</div>
                ))}
            </div>
        </div>
    );
};

export default ChatRoom;
