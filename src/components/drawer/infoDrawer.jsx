import { Drawer, Typography,Box,styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";
const drawerStyle={
    left:30,
    top:15,
    height:'95%',
    width:'30%',
    boxShadow:'none'
    
}

const Header=styled(Box)`
    background:#008069;
    height:144px;
    display:flex;
    color:#ff;
    & > svg, & > p {
        margin-top:auto;
        padding-left:10px;
        font-weight:600;

    }
` 
const Component=styled(Box)`
    background:#ededed;
    height:85%;
`
const InfoDrawer=(props)=>{

    const handleClose=()=>{
        props.setOpen(false)
        // props.setOnProfile(false);
    }
    return (
        <Drawer 
            open={props.Open } 
            onClose={handleClose}
            PaperProps={{sx:drawerStyle}} 
            style={{zIndex:2000}}
        >
        <Header>
            <ArrowBack onClick={()=>{ props.setOpen(false)}} />
            <Typography>Profile</Typography>
        </Header>  
        <Component>
            <Profile />
        </Component>  
        </Drawer>
    )
}

export default InfoDrawer;