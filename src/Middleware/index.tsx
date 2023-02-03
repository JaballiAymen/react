// guard if is logged in or not

import { useSelector } from "react-redux";
import { RootState } from "../Services/Store";
import { Navigate, Outlet, Route } from "react-router-dom";
import Login from "../Pages/auth/login";

export const GuardAuth = ( component : any) => {
    const isAutheticated =  false;
    if(!isAutheticated) {
        return <Login />
    }else {
        return <Navigate to="/dashboard" />
    }

};


export default GuardAuth;
 