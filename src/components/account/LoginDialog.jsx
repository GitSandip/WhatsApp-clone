import React from "react";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from 'jwt-decode';
import {addUser,getUser} from "../../service/API";

const dialogStyle = {
    width: '70%',
    height: '100vh',        //Change height to '100vh' to make it take the maximum height of the viewport
    marginTop: '10%',
    marginBottom: '20px',
    maxHeight: '100%',
    maxWidth: '100%',
    boxShadow: 'none',
 // Change overflowY to 'auto' to add a scrollbar when needed
    borderRadius: '3px'
  };
  

  
  const Container = styled(Box)`
    padding: 56px 0px 56px 56px;
    height: 100%; // Add height: 100% to make the container take the available height
    
  `;
  
//css for material ui components
const Component = styled(Box)`
    display:flex;  
`


//css for html tag
const QRCode = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 0px 0px 80px'

})

const Title = styled(Typography)`
font-size: 28px;
font-weight: 300;
line-height: normal;
color: #41525d;
    // font-size:26px;
    // color: #525252;
    font-weight:300;
    font-family:inherit;
    // margin-bottom: 25px;

`
//css for childs of List
const ListComponent = styled(List)`
    & > li {
        margin-top:15px;
        font:inherit;
        paading:0px;
        font-size: 18px;
        line-height:15px;
    }
`
const GLogin = styled(GoogleLogin)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`


const Login = () => {


    const {setAccount}=useContext(AccountContext);
    const onLoginSuccess =async (res) => {
        const response=jwt_decode(res.credential)
        console.log("response from login react..",response);
        // const data=new FormData();
        // data.append('name',"sandip")
        setAccount(response); 
        await addUser(response);                  //not work this required body-parser and bodyparser.JSON()
        

    }
    const onLoginError = (res) => {
        console.log(res);
    }


    return (
        <Dialog open={true}
            fullWidth maxWidth="lg"
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
        >
            <Component>
                <Container>
                    <Title>Use WhatsApp on your computer</Title>
                    <ListComponent>
                        <ListItem>1. Open WhasApp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
                        <ListItem>3. Tap on Link a device</ListItem>
                        <ListItem>4. Point your phone to this screen to capture code</ListItem>
                    </ListComponent>
                </Container>
                <Box style={{ position: 'relative' }}>
                    <QRCode src="https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg" alt="qrcode" />
                    <Box style={{ position: 'absolute', top: '50%', left: '62%', transform: 'translate(-50%, -50%)' }}>
                        <GLogin onSuccess={onLoginSuccess} onError={onLoginError} />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default Login;