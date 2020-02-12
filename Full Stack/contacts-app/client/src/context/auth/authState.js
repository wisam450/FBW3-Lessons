import React, { useReducer } from 'react';

import AuthContext from './authContext';
import authReducer from './authReducer';
import {
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    FILTER_CONTACT,
    SET_ALERT,
    REMOVE_ALERT,
    SET_CURRENT,
    CLEAR_CURRENT,
    CLEAR_FILTER

} from "../types";

const AuthState = (props) => {
    const initialState = {
        token : localStorage.getItem('token'),
        isAuthenticated: null ,
        loading : true,
        user : null,
        error : null       
    };
    const [state, dispatch] = useReducer(authReducer, initialState);
    // Load User 

    // Register User

    // Login User 

    // Logout


   
    return (
        <AuthContext.Provider

            value={{

                token : state.token,
                isAthenticated : state.isAthenticated,
                loading : state.loading,                
                user : state.user,
                error: state.error             

            }}
        >
            {props.children}
        </AuthContext.Provider>
    )


}

export default AuthState;