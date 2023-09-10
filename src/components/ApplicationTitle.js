import {Box,Typography} from "@mui/material"
export default function ApplicationTitle() {
    return (
        <Box flex={2} sx={{border: "10px", padding: "20px 0px",}}>
            <Typography variant="h6" component="span" sx={{fontWeight: 'bold', userSelect: "none"}}>
                ChatRoom{" "}
                <Typography variant="body2" component="span"
                            sx={{marginLeft: "20px", userSelect: "none"}}>
                    By 1manity
                </Typography>
            </Typography>
        </Box>
    )
}