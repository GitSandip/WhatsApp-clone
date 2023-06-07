import {useContext,useState } from "react";
import {Box,styled} from '@mui/material'
import { AccountContext } from "../../../context/AccountProvider";
import Status from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/infoDrawer";

const Head=styled(Box)`
    height:44px;
    background-color:#ededed;
    padding: 8px 16px;
    display: flex;
    align-items:center;
    margin-right:auto;
`

const Wrapper=styled(Box)`
    margin-left:auto;
    & > * {
        margin: 5px;
        
    }
`

const Image= styled('img')({
    height:35,
    width:35,
    borderRadius:'50%'
}) 
    

const Header=()=>{
    const [openDrawer,setOpenDrawer]=useState(false);
    const { Account }=useContext(AccountContext)

    const handleClick=()=>{
        setOpenDrawer(true);
    }
    return (
    <>
    <Head>
            <Box>
                <Image src={Account.picture} alt="dp" onClick={()=>handleClick()} />
            </Box>
            <Wrapper>
                <Status />
                <ChatIcon />
                <HeaderMenu setOpenDrawer={setOpenDrawer}/>
            </Wrapper>    
    </Head>
            <InfoDrawer Open={openDrawer} setOpen={setOpenDrawer} />
    </>

    )
}

export default Header;