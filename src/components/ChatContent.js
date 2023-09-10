import {Box, Card, CardContent} from "@mui/material"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function ChatContent({messages}) {
    return (
        <Box flex="7" sx={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #dedede",
            overflow: 'auto'
        }}>
            {messages.map(message => (
                <ChatContentItem
                    key={message.id}
                    left={message.sender === ''}
                    message={message.content}
                />
            ))}
        </Box>
    )
}

function ChatContentItem({left, message}) {
    return (
        <>
            <Box sx={{
                borderRadius: "9px",
                backgroundColor: "#eef4ed",
                border: "1px solid #d6e4df",
                width: "38px",
                marginLeft: left ? "0" : "auto"
            }}>
                <PersonOutlineOutlinedIcon fontSize="large"></PersonOutlineOutlinedIcon>
            </Box>
            <Card
                sx={{
                    borderRadius: "10px",
                    backgroundColor: "#eef4ed",
                    border: "1px solid #d6e4df",
                    width: "fit-content",
                    mt: 1,
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