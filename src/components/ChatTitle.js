import {Box, Typography} from "@mui/material"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "./ChatTitle.css"
export default function ChatTitle({username,setUsername}) {
    const handleClick = () => {

        const inputName = prompt('请输入用户名',username);

        if(inputName) {
            setUsername(inputName);
        }

    }
    return (
        <Box flex={"1"} sx={{

            borderTopRightRadius: "30px",
            border: "1px solid #dedede",
            padding: "10px",
            display:"flex",
            alignItems: 'center',

        }}>
            <Typography variant="h4" component="span" sx={{fontWeight: 'bold', margin: "20px", userSelect: "none"}}>
                Main
            </Typography>
            <div className={"div"}
                 onClick={()=> {handleClick()}}>

                <AccountCircleOutlinedIcon fontSize="medium" />
            </div>

        </Box>
    )
}