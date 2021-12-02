import React, { createContext, useReducer } from "react";
import authInitialState from "./initialStates/authInitialState";
import contactInitialState from "./initialStates/contactInitialState";
import auth from "./reducers/auth";
import contact from "./reducers/contact";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [contactState, contactDispatch] = useReducer(contact, contactInitialState);

    return <GlobalContext.Provider value={{ authState, contactState, authDispatch, contactDispatch }}>{children}</GlobalContext.Provider>
}

export default GlobalProvider;