import { AppBar, Toolbar, styled, Box } from '@mui/material'
import Login from './account/LoginDialog';
import Chat from './chat/ChatDialog';

import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';

const Component = styled(Box)`
height: 100vh;
width:100%;
background-color: #000000;
`
const Header = styled(AppBar)`
height: 200px;
max-width: 100vw;
background-color: #00a884;
box-shadow: none:
`

const Messanger = () => {

    const { Account } = useContext(AccountContext);
    console.log(Account)

    return (
        <Component >
            {
                Account ? <Chat /> : <div>
                    <Header style={{ width: "100%" }} />
                    <Toolbar />
                    <Login />
                </div>
            }

        </Component>
    )
}

export default Messanger;