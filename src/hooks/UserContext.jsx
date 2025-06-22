import { createContext } from "react";
//create context
export const UserContext=createContext();

//context Provider
export const UserProvider=({children})=>{
    const name='Naveen'
        const user={name:'BALA',age:21,dept:'MSC'}
    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}