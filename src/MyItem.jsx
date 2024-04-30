import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { ContextApi } from './Route.jsx/ContextProvider'
import { Item } from './Components/Item'
import { Helmet } from 'react-helmet-async'

export const MyItem = () => {
    const { user } = useContext(ContextApi)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://server-site-gamma-indol.vercel.app/items')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data)
            })
    }, [])

    const filteredItem = products.filter(s => s.email === user.email);
    // console.log(filteredItem)

    // console.log(myItem)
    return (
        <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5 p-0  lg:w-full w-10/12 mx-auto mt-5 '>
            <Helmet>
                <title>Fiber Fution | My added item</title>
            </Helmet>
            {
                filteredItem.map(myItm => <Item
                    myItm={myItm}
                    setProducts={setProducts}
                    products={products}
                    key={myItm._id}>

                </Item>)
            }
        </div>
    )
}
