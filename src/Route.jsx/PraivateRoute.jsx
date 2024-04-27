import React, { useContext } from 'react'
import { ContextApi } from './ContextProvider'
import { Navigate, useLocation } from "react-router-dom"
import { setTokenAutoRefreshEnabled } from 'firebase/app-check';
import { clear } from 'localforage';


export const PrivateRoute = ({ children }) => {
    const { user, loading, setLoading } = useContext(ContextApi)
    const location = useLocation()
    // console.log(location.pathname)

    if (user) {

        return children
    }

    else {

        if (loading) {
            return <div className='flex justify-center items-center'>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        };
    

    if (!user) {
        return <Navigate to={'/login'} state={location.pathname}> </Navigate>

    }




}





};