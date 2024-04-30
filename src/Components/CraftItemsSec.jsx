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
        fetch('https://server-site-gamma-indol.vercel.app/items')
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
            <div className='text-center w-8/12 mx-auto space-y-2'>
                <h1 className='text-center text-4xl'>Glimpses of Craft Items</h1>
                <p className='text-lg '>Indulge in our diverse array of handcrafted treasures: pottery, jewelry, textiles, paintings, sculptures, candles, woodwork, glass art, each meticulously crafted with care.</p>
            </div>

            <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5 p-0  lg:w-full w-10/12 mx-auto mt-5 '>

                {
                    products.slice(0, 9).map(myItm => <CraftSingleItem
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
