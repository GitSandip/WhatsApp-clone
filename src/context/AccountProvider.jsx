import { createContext,useState } from "react";

export const AccountContext=createContext(null);

const AccountProvider= ({children})=>{
const [Account,setAccount]=useState();

    return (
        <AccountContext.Provider value={{Account,setAccount}}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider; 