import React, { useContext, useEffect } from 'react'
import { ContextApi } from './ContextProvider'
import { Navigate, useLocation } from "react-router-dom"
import { setTokenAutoRefreshEnabled } from 'firebase/app-check';
import { clear } from 'localforage';


export const PrivateRoute = ({ children }) => {
    const { user, loading, setLoading } = useContext(ContextApi)
    const location = useLocation()
    // console.log(location.pathname)
    // console.log(loading)
    if (user) {
    
        return children
    }
   
    if (!user & loading===false) {
        return <Navigate to={'/login'} state={location.pathname}> </Navigate>
    
    }

    if (loading) {
        
        return <div className='flex justify-center items-center text-primary'>
                <span className="loading loading-bars loading-lg"></span>
            </div>

    };
    











}





