import { createContext, useState } from "react";

export const userContext = createContext();

export function UserProvider({children}){
    const [user, setUser] = useState("Mobina");

    return(
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}