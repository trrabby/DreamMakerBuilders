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

    else {

        if (loading) {
            return useEffect(() => {
                setTimeout(() => {
                    return <div className='flex justify-center items-center text-primary'>
                        <span className="loading loading-bars loading-lg"></span>
                    </div>

                    // return <div className="mt-32 h-dvh flex items-center justify-center">
                    //     <div className="flex flex-row gap-2">
                    //         <div className="w-4 h-4 rounded-full bg-primary animate-bounce"></div>
                    //         <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.3s]"></div>
                    //         <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.5s]"></div>
                    //     </div>
                    // </div>
                }, 2000)
                clearTimeout();
            }, [])
        };


        if (!user) {
            return <Navigate to={'/login'} state={location.pathname}> </Navigate>

        }




    }





};