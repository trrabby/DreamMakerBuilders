import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { ContextApi } from './Route.jsx/ContextProvider'
import { Item } from './Components/Item'

export const MyItem = () => {
    const { user, loading } = useContext(ContextApi)
    const myItem = useLoaderData()

    console.log(user)

    if(loading) {
        return <div className='flex justify-center items-center'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    

    const filteredItem = myItem.filter(s => s.email === user.email);
    // console.log(filteredItem)

    // console.log(myItem)
    return (
        <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5 p-0 mb-10 lg:w-full w-10/12 mx-auto mt-5 '>
            {
            filteredItem.map(myItm=><Item myItm={myItm} key={myItem._id}></Item>)
        }
        </div>
    )
}
