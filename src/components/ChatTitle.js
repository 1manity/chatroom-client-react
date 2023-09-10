import {Box,Typography} from "@mui/material"
export default function ChatTitle() {
    return (
        <Box flex="1" sx={{

            borderTopRightRadius: "30px",
            border: "1px solid #dedede",
            overflow: 'auto',
            padding: "10px",
        }}>
            <Typography variant="h4" component="span" sx={{fontWeight: 'bold', margin: "20px",userSelect:"none"}}>
                Main
            </Typography>

        </Box>
    )
}