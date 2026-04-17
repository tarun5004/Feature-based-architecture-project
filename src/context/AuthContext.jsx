import { createContext, useEffect, useState } from 'react';
import { storage } from '../utils/LocalStorage';

let AuthContext = createContext();

export let AuthProvider = ({ children }) => {
    // Single source of truth ke liye storage keys ko constants me rakha hai.
    // Isse Login/Register/AuthContext sab jagah same key use hogi.
    const REGISTER_ADMINS_KEY = 'registerAdmins';
    const LOGIN_ADMIN_KEY = 'loginAdmin';

    // Initial state direct localStorage se read kar rahe hain.
    // Isse useEffect ke andar setState karne wali unnecessary warning khatam ho jaati hai.
    const [registerAdmins, setRegisterAdmins] = useState(
        () => storage.get(REGISTER_ADMINS_KEY) || []
    );

    // Logged-in admin ek single object hota hai, array nahi.
    // Naam ko loginAdmin rakha hai taaki hook aur route guards me same naming use ho.
    const [loginAdmin, setLoginAdmin] = useState(
        () => storage.get(LOGIN_ADMIN_KEY) || null
    );

    // Jab bhi registered admins change hon, unhe localStorage me sync kar do.
    useEffect(() => {
        storage.set(REGISTER_ADMINS_KEY, registerAdmins);
    }, [registerAdmins]);

    // Jab bhi logged-in admin change ho, usko localStorage me sync kar do.
    // Null aaye to key remove kar denge taaki stale login data na rahe.
    useEffect(() => {
        if (loginAdmin) {
            storage.set(LOGIN_ADMIN_KEY, loginAdmin);
            return;
        }

        storage.remove(LOGIN_ADMIN_KEY);
    }, [loginAdmin]);


    return (
        <AuthContext.Provider value= {{ 
            registerAdmins,
            setRegisterAdmins,
            loginAdmin,
            setLoginAdmin
        }} > 
        
        {children}
        </AuthContext.Provider>
    )
}





export default AuthContext;
