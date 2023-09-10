import {Box, Grid,Button,Card,CardContent} from '@mui/material';
import {styled} from '@mui/material/styles';
import {Typography} from '@mui/material';
import ChatList from "./ChatList";
import "./ChatRoom.css";
import {useState} from 'react';
import SendIcon from '@mui/icons-material/Send';
export default function ChatInput({value,setValue,sendMessage}) {
    return (
        <Box flex={"1"} sx={{
            border: "1px solid #dedede",
            borderBottomRightRadius: "0px",
            display: 'flex',
            alignItems: 'center',
            px: 2, py: 2,
            borderTop: '2px #ddd'
        }}>
            {/* 输入框 */}
            <Box sx={{
                border: "1px solid #dedede",
                borderRadius: '20px',
                height:"100%",
                width:"100%",
                padding: "15px",
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end'
            }}>
                                    <textarea flex={8} className={"input"}
                                              value={value}
                                              onChange={(e) => setValue(e.target.value)}>
                                    </textarea>
                <Button onClick={()=>sendMessage(value)} endIcon={<SendIcon />} flex={1} sx={{
                    minWidth: "50px", /* 宽度 */
                    height: "35px", /* 高度 */
                    borderWidth: "0px", /* 边框宽度 */
                    borderRadius: "6px", /* 边框半径 */
                    background: "#86c8d1", /* 背景颜色 */
                    cursor: "pointer", /* 鼠标移入按钮范围时出现手势 */
                    outline: "none", /* 不显示轮廓线 */
                    fontFamily: "Roboto, serif" , /* 设置字体 */
                    color: "white", /* 字体颜色 */
                    fontSize: "13px", /* 字体大小 */
                    fontWeight: "bold",
                    ":hover": {
                        backgroundColor: "#6bb0bc"
                    }
                }}>send</Button>
            </Box>



        </Box>
    )
}