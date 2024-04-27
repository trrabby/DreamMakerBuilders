import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Item } from './Item'

export const AllItems = () => {
    const itmes = useLoaderData()
    console.log(itmes)
    return (
        <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5 p-0 mb-10 lg:w-full w-10/12 mx-auto mt-5 '>
            {
                itmes.map(item =>
                    <Item item={item} key={item._id}>

                    </Item>)
            }
        </div>
    )
}
