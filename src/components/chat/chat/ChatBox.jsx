import {Box} from '@mui/material'
import Messages from './Messages';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import { AccountContext } from '../../../context/AccountProvider';
import { useContext } from 'react';

const ChatBox= ()=>{

    const { person } = useContext(AccountContext)

    return (
        <Box>
        <ChatHeader person={person} />
        <Messages person={person} />
        <ChatFooter />
        </Box>
    )
}

export default ChatBox; 