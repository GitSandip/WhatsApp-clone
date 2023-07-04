import { emptyChatImage } from "../../../constants/data";
import { Box,styled,Typography } from "@mui/material";

const Container=styled(Box)`
    height:100%;
    width:100%;
    background:#f8f9fa;
    text-align:center;
`

const Component=styled(Box)`
    padding:0px 180px;
`
const Image=styled('img')({
    width:400,
    marginTop:100
})

const Title=styled(Typography)`
    font-size:30px;
    margin:25px 0px 10px 0;
    font-family:inherit;
    font-weight:200;
    color:#41525d;

`

const SubTitle=styled(Typography)`
    font-size:14px;
    color:#667781;
    font-weight:400;
`
const EmptyChat=()=>{
    return (
        <Container>
            <Component>
                <Image src={emptyChatImage} alt="EmptyChatimg" />
                <Title>WhatsApp Web</Title>
                <SubTitle>Send and receive messages without keeping your phone online. <br/>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</SubTitle>

            </Component>
        </Container>
    )
}
  
export default EmptyChat;