import React from "react";
import Messanger from "./components/Messanger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";



function App(){
    return (
        <GoogleOAuthProvider clientId="546593624756-juioosl0fk351042f5pfpn7fj68vh1q6.apps.googleusercontent.com">
            <AccountProvider>
                <Messanger />            
            </AccountProvider>
            </GoogleOAuthProvider>
    )
}
export default App;