import { Box, InputBase,styled } from "@mui/material";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';

const Component= styled(Box)`
    height:50px;
    background:#ededed;
    display:flex;
    width:100%;
    align-items:center;
    padding:0px 15px;
    // margin-bottom:10px;
    & > *{
        margin:5px;
        color:#919191;
        
    }
`

const Search = styled(Box)`
    background-color:#ffffff;
    border-radius:18px;
    width:90%;
`

const InputField = styled(InputBase)`
    width:100%;
    padding:0px 20px;
    font-size:15px;
`

const ClipIcon = styled(AttachFileOutlinedIcon)`
    transform:rotate(40deg);
`

const ChatFooter = ()=>{
    return (
        <Component>
            <EmojiEmotionsOutlinedIcon />
            <ClipIcon />
            <Search>
                <InputField placeholder="Type a message" />
            </Search>
            <MicOutlinedIcon />
        </Component>
    )
}

export default ChatFooter;