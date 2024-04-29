import React, { useContext, useEffect, useState } from 'react'
import { ContextApi } from '../Route.jsx/ContextProvider';
import { Helmet } from 'react-helmet-async';
import { data } from 'autoprefixer';
import { Item } from './Item';
import { CraftSingleItem } from './CraftSingleItem';

export const CraftItemsSec = () => {
    const { user, setLoading } = useContext(ContextApi)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://https://server-site-gamma-indol.vercel.app//items')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data)
                // setLoading(false)
            })
    }, [])

    // const filteredItem = products.filter(s => s.email === user.email);
    // console.log(filteredItem)

    // console.log(myItem)
    return (

        <div className='mt-10'>
            <h1 className='text-center text-2xl'>Glimpses of Craft Items</h1>

            <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5 p-0  lg:w-full w-10/12 mx-auto mt-5 '>
                <Helmet>
                    <title>Fiber Fution | My added item</title>
                </Helmet>

                {
                    products.map(myItm => <CraftSingleItem
                        myItm={myItm}
                        setProducts={setProducts}
                        products={products}
                        key={myItm._id}>

                    </CraftSingleItem>)
                }
            </div>

        </div>

    )
}
