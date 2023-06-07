import { Box,Typography,styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const ImageContainer=styled(Box)`
    display:flex;
    justify-content:center;
`;
const Image=styled('img')({
    width:160,
    height:210,
    borderRadius:'50%',
    padding:'25px 0px'
})

const BoxWrapper=styled(Box)`
    background:#ff;
    padding: 12px 20px 2px; 
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    & :first-child{
        font-size:13px;
        color:#009670;
        font-weight:200;
    }
    & :last-child{
        margin:10px 0;
        color: #4A4A4A;
    }

`
const Caption=styled(Box)`
    font-size:11px;
    padding:5px 20px;
    font-weight:200;
    margin-top:5px;
`


const Profile= ()=>{

    const {Account}=useContext(AccountContext);
    return (
        <>
            <ImageContainer>
                <Image src={Account.picture} alt="dp" />
            </ImageContainer>
            <BoxWrapper>
                <Typography>Your name</Typography>
                <Typography>{Account.name}</Typography>
            </BoxWrapper>
            <Box>
                <Caption>
                    This is not your username or pin. This name will be visible to your WhatsApp contacts.
                </Caption>
            </Box>
            <BoxWrapper>
                <Typography>About</Typography>
                <Typography>On MY Way📈</Typography>
            </BoxWrapper>
            
        </>
    )
}

export default Profile;