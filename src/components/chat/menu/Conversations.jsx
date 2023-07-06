import { Box,styled,Divider} from "@mui/material";
import { useState,useEffect, useContext } from "react"; 
import { getUser } from "../../../service/API";
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";

const Component= styled(Box)`
    height:81vh;
    overflow:overlay;
`
const StyledDivider=styled(Divider)`
    margin-left:50px;
    margin-top:3px;
    background-color:#e9edef;
    opacity:0.6;

`

const Conversations=({text})=>{ 

    const [users,setUsers]=useState([]);

    const {Account} = useContext(AccountContext);
    useEffect(()=>{

        const fetchData = async ()=>{
            let response = await getUser();
            const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase())); //filter used on array rresponse and filtered each obj in arry based on conditions
            setUsers(filteredData);
        }
        fetchData();
    },[text]);

    return (
        <Component>
          {users.map(user => (
            user.sub !== Account.sub && 
            <>
            <Conversation key={user.id} user={user} />
            <StyledDivider />
            </>
          ))}
        </Component>
      );
      
}

export default Conversations;