import { Box } from "@mui/material";
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";
const menu =()=>{
    return (
        <Box>
            <Header />
            <Search />
            <Conversations />
        </Box>
    )
}
export default menu;