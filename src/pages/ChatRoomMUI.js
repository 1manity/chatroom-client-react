import {Box, Grid, Button, Card, CardContent} from '@mui/material';
import {styled} from '@mui/material/styles';
import {Typography} from '@mui/material';
import ChatList from "../components/ChatList";
import "../components/ChatRoom.css";
import {useEffect, useState,useRef} from 'react';
import SendIcon from '@mui/icons-material/Send';
import ChatContent from "../components/ChatContent";
import ChatInput from "../components/ChatInput";
import ChatTitle from "../components/ChatTitle";
import ApplicationTitle from "../components/ApplicationTitle";

const Container = styled('div')({
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
});

function ChatRoomMUI() {
    const socketRef = useRef(null);
    const [chatInputValue, setChatInputValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState(window.localStorage.getItem('username') || '');


    const sendMessage = (newMessage) => {
        if (newMessage.trim() === '') {
            return;
        }
        console.log(Math.floor(Date.now()))
        const message = {
            type: "chat",
            content: newMessage,
            sender:username,
            timestamp:Math.floor(Date.now())
        };
        socketRef.current.send(JSON.stringify(message));
    };

    useEffect(() => {
        window.localStorage.setItem('username', username);
    }, [username]);

    useEffect(()=>{
        socketRef.current=new WebSocket('ws://127.0.0.1:33459/ws')
        console.log(socketRef.current)


            socketRef.current.onopen = () => {
                console.log('WebSocket connected');
            };
            socketRef.current.onmessage = (event) => {
                console.log(event.data)

                const message = JSON.parse(event.data);
                setMessages((prevMessages) => [...prevMessages, {
                    ...message,
                    id: `${message.sender}-${message.timestamp}`
                }]);
            };
            socketRef.current.onclose = () => {
                console.log('WebSocket disconnected');
            };

            return () => {
                socketRef.current.close();
            };

    },[socketRef])


    return (
        <Container>
            <Box sx={{
                display: 'flex',
                margin: "0",
                // marginTop: "5%",
                width: "70%",
                height: "85%",
                border: "1px solid #dedede",
                borderRadius: "30px",
                boxShadow: "50px 50px 100px 10px rgba(0,0,0,.1)",
                backgroundColor: "white",
            }}>
                <Grid container>
                    <Grid item xs={3}>
                        <Box
                            sx={{
                                borderRadius: '30px',
                                borderTopRightRadius: "0px",
                                borderBottomRightRadius: "0px",
                                border: "1px solid #dedede",

                                padding: "20px",

                                height: "100%",
                                backgroundColor: "#e4ffff"
                            }}
                            display="flex" flexDirection="column" height="100%"
                        >
                            <ApplicationTitle/>
                            {/* 标题 */}

                            <ChatList/>
                            {/* 联系人列表 */}
                        </Box>

                    </Grid>

                    <Grid item xs={9}>
                        <Box display="flex" flexDirection="column" height="100%">

                            <ChatTitle username={username} setUsername={setUsername}/>
                            {/* 消息列表 */}
                            <ChatContent messages={messages} username={username}/>
                            <ChatInput value={chatInputValue} setValue={setChatInputValue} sendMessage={sendMessage}/>
                            {/* 输入框 */}

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )

}

export default ChatRoomMUI;