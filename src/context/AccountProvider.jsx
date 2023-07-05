import { createContext,useState } from "react";

export const AccountContext=createContext(null);

const AccountProvider= ({children})=>{
const [Account,setAccount] = useState();
const [person,setPerson] = useState({});

    return (
        <AccountContext.Provider value={{Account,setAccount,person,setPerson}}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider; 