import { Box,Typography,styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext} from "../../../context/AccountProvider";
import { setConversation } from "../../../service/API";
const Name=styled(Typography)`
    padding-left:5px;
`
const Profile=styled('img')({
    width:40,
    height:40,
    borderRadius:'50%'


})

const Wrapper = styled(Box)`
    display:flex;
    height:50px;
    padding:10px 0px;
    cursor:pointer;
    margin-left:5px;
    
`

const Conversation=({user})=>{

    const {setPerson,Account} = useContext(AccountContext);

    const getUserData = async ()=>{
       setPerson(user);
       await setConversation({senderId: Account.sub , receiverId: user.sub})

    }
    
    return (
        <Wrapper onClick={()=> getUserData()}>
            <Box>
                <Profile src={user.picture} />
            </Box>
            <Box>
                <Name>{user.name}</Name>
            </Box>
        </Wrapper>
    )
}

export default Conversation;