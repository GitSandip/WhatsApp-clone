import {Box} from '@mui/material'
import Messages from './Messages';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';

const ChatBox= ()=>{
    return (
        <>
        <ChatHeader />
        <Messages />
        <ChatFooter />
        </>
    )
}

export default ChatBox; 