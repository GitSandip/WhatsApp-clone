import { MoreVert, Search } from "@mui/icons-material";
import { Box, Typography,styled } from "@mui/material";
// import { blankprofile } from "../../../constants/data";

const Header = styled(Box)`
    height:44px;
    background:#ededed;
    padding: 8px 16px;
    display:flex;
    align-items:center;
`

const Image = styled('img')({
    height:40,
    width:40,
    borderRadius:'50%',
    objectFit:'cover'
})

const Name= styled(Typography)`
    margin-left:12px !important;
`

const Status = styled(Typography)`
    margin-left:12px;
    font-size:12px;
    color: rgb(0,0,0,0.6);
`

const RightContainer = styled(Box)`
    margin-left:auto;
    & > svg{
        padding:2px;
        font-size:24px;
    }
`
const ChatHeader= ({person})=>{
    return (
        <Header>
            <Image src={person.picture} alt="dp" />
            <Box> 
                <Name>{person.name}</Name>
                <Status>Offline</Status>
            </Box>
            <RightContainer>
                <Search />
                <MoreVert />
            </RightContainer>
        </Header>
    )
}

export default ChatHeader;