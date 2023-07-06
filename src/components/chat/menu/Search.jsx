import { Box,styled } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


const Component=styled(Box)`
    background: #fff;
    height: 45px;
    border-bottom: 1px solid #F2F2F2;
    align-items:center;
    display:flex;
    
`

const Icon=styled(Box)`
    position:absolute;
    height: 100%;
    padding: 10px;
    padding-top:6px;
    color: #919191;
    
    
`
const InputField=styled(InputBase)`
    width:100%;
    padding: 16px;
    height:15px;
    padding-left:60px;
    // font-size:14px;
`
const Wrapper=styled(Box)`
    background-color: #f0f2f5;
    position:relative;
    margin: 0px 13px;
    width:100%;
    align-items:center;
    border-radius:10px;
    // height:30px;
`
const Search=({setText})=>{
    return (
        <Component>
        <Wrapper>
            <Icon>
                <SearchIcon fontSize="small" />
            </Icon>
                <InputField placeholder="Search or start new chat" onChange={(e)=> setText(e.target.value)} />
        </Wrapper>
        </Component>
    )
}
export default Search;