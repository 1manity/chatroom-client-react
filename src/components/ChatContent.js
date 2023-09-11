import {Box, Card, CardContent} from "@mui/material"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import "./ChatRoom.css"
import {Typography} from '@mui/material';
export default function ChatContent({messages,username}) {
    return (
        <Box flex={"7"} sx={{
            // maxHeight: '77.77vh',
            display: "flex",
            flexDirection: "column",
            border: "1px solid #dedede",
        }}>

            <div className={"room"} sx={{
                overflow: 'auto',
                maxHeight: 'calc(100% - 20px)' // 减去padding大小
            }}>
                {messages.map(message => (
                    <ChatContentItem
                        key={message.id}
                        left={username!==message.sender}
                        message={message.content}
                        username={message.sender}
                    />
                ))}
            </div>

        </Box>
    )
}

function ChatContentItem({left, message, username}) {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                {!left && (<Box flex={"19"} sx={{marginTop:"auto", marginRight:"4px"}}><Typography variant={"body2"} sx={{ textAlign: 'right'}}>{username}</Typography></Box>)}
                <Box flex={1}
                    sx={{

                    borderRadius: "9px",
                    backgroundColor: "#eef4ed",
                    border: "1px solid #d6e4df",
                    width: "38px",
                    marginLeft: left ? "0" : "auto"
                }}>
                    <PersonOutlineOutlinedIcon fontSize="large"></PersonOutlineOutlinedIcon>
                </Box>
                {left && (<Box flex={"19"} sx={{marginTop:"auto", marginLeft:"4px"}}><Typography variant={"body2"} sx={{ textAlign: 'left'}}>{username}</Typography></Box>)}
            </Box>
            <Card
                sx={{
                    borderRadius: "10px",
                    backgroundColor: "#eef4ed",
                    border: "1px solid #d6e4df",
                    width: "fit-content",
                    mt: 1,
                    mb: 2,
                    marginLeft: left ? "0" : "auto"
                }}
            >
                <CardContent sx={{p: 2}}>
                    {message}
                </CardContent>

            </Card>
        </>
    )
}