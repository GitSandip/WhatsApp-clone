import { Box,Typography,styled } from "@mui/material";

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
    return (
        <Wrapper>
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