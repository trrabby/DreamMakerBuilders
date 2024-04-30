import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Item } from './Item'
import { ArtCatItem } from './ArtCatItem'
import { CraftSingleItem } from './CraftSingleItem'
import { ArtCatSingleItem } from './ArtCatSingleItem'

export const ArtCatAllItems = () => {

    const fetchedCatItems = useLoaderData()
    console.log(fetchedCatItems)
    return (
        <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5 p-0  lg:w-full w-10/12 mx-auto mt-5 ' >
            {
                fetchedCatItems.map(myItm => <ArtCatSingleItem
                    myItm={myItm}
                    key={myItm._id}>

                </ArtCatSingleItem>)
            }
        </div>
    )
}
