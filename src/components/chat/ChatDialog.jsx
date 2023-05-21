import React from "react";
import { Box,Typography,styled } from "@mui/material";

const Title=styled(Typography)`
    background-color:aquamarine;
`
const chat=()=>{
    return (
        <Box>
            <Title>
            Hello from chatt dialog
            </Title>
        </Box>
    )
}

export default chat;