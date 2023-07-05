import React from "react";
import {Box,Dialog,styled } from "@mui/material";
import Menu from './menu/Menu'
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
// const Title=styled(Typography)`
//     background-color:aquamarine;
// `

const dialogStyle = {
    width: '99%',
    height: '95%',
    maxHeight: '100%', 
    maxWidth: '100%',
    boxShadow: 'none',
    overflowY: 'hidden',
    borderRadius: '0px'  
}

const Component= styled(Box)`
    display:flex
`

const LComponent=styled(Box)`
    width:30rem;
    min-width:20rem;
    height:100%;
`
const RComponent=styled(Box)`
    width:70%;
    min-width:300px;
     height: 100vh;
     border-left: 1px solid rgb(0,0,0,0.2);

`
const Chat=()=>{

    const { person } = useContext(AccountContext)

    return (
        <Dialog
        open={true}
        hideBackdrop={true}
        PaperProps={{sx:dialogStyle}}
        >
        <Component>
            <LComponent>
                <Menu /> 
            </LComponent>
            <RComponent>
               
                {Object.keys(person).length ? <ChatBox /> : <EmptyChat /> }

            </RComponent>
        </Component>

        </Dialog>
    )
}

export default Chat;