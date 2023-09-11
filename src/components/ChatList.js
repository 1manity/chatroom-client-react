import {Box, Grid} from '@mui/material';
import {Typography} from '@mui/material';
import {useState, useEffect} from 'react';

export default function ChatList() {
    return (
        <Box flex={17} sx={{border: "10px"}}>
            <ChatListItem />
        </Box>
    )
}

function ChatListItem() {
    const [topics, setTopics] = useState([]);

    function TimeFormat(date) {
        return date.getFullYear() + '/' +
            (date.getMonth() + 1) + '/' +
            date.getDate() + ' ' +
            date.getHours() + ':' +
            date.getMinutes() + ':' +
            date.getSeconds();
    }


    useEffect(() => {
        const data = window.localStorage.getItem('topics');
        if (data) {
            setTopics(JSON.parse(data));
        } else {
            let t = TimeFormat(new Date());
            setTopics([{
                topic: "Main",
                lastUpdate: t
            }]);
            window.localStorage.setItem('topics', JSON.stringify([{
                topic: "Main",
                lastUpdate: t
            }]));
        }
    }, []);


    return (
        <Box sx={{
            border: "2px solid #36a9ad",
            borderRadius: "10px",

            height: "70px",
            backgroundColor: "white",
            padding: "10px",
            // display:"flex",
            // justifyContent: "center",
            // alignItems: "center"
            "-webkit-transition": "all .3s",
            ":hover": {
                backgroundColor: "#e7e7e7",
                cursor: "pointer",
            }
        }}>


            {
                topics.map(topic => (
                    <div key={topic.topic}>
                        <Typography variant="h6"
                                    sx={{fontWeight: 'bold', userSelect: "none"}}>{topic.topic}</Typography>
                        <Typography variant="body2" sx={{
                            fontWeight: '',
                            color: "grey",
                            userSelect: "none"
                        }}>{topic.lastUpdate}</Typography>
                    </div>
                ))}
        </Box>
    )


}