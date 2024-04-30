import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { ContextApi } from './Route.jsx/ContextProvider'
import { Item } from './Components/Item'
import { Helmet } from 'react-helmet-async'
import toast from 'react-hot-toast'
import { DiBackbone } from 'react-icons/di'

export const MyItem = () => {
    const { user } = useContext(ContextApi)
    const [products, setProducts] = useState([]);
    const [customized, setCustomized] = useState(null);

    useEffect(() => {
        fetch(`https://server-site-gamma-indol.vercel.app/items-data/${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data)
            })
    }, [products])



    const handleSortByCustomization = (e) => {
        // console.log(e.target.value)
        const value = e.target.value;

        if (value === 'All') {
            toast('You are watching all items.')
            return setCustomized(null)


        }
        if (value === 'Yes') {
            const yesValue = products.filter(fI => fI.customization === "Yes")
            setCustomized(yesValue)
            return toast('Customizable items are projected')
        }
        else {
            const noValue = products.filter(fI => fI.customization === "No")
            setCustomized(noValue)
            return toast('These Items are not Customizable')
        }




    }
    return (
        <div className='flex flex-col'>
                    <div className='text-center flex items-center justify-center sticky top-16 z-10 bg-[#0c1020c0] p-5 mt-2 w-auto rounded-lg mx-auto space-y-3'>
                <p className='5/12 mx-auto text-xl font-bold text-white'>Wanna See Customizable Items?</p>
                <select className='w-6/12 text-center text-white bg-accent py-2 rounded-lg' defaultValue={'All'} onChange={handleSortByCustomization}>
                    <option value="All">All</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5 p-0  lg:w-full w-10/12 mx-auto mt-5 '>
                <Helmet>
                    <title>Fiber Fution | My added item</title>
                </Helmet>

                {
                    customized ? customized.map(myItm => <Item
                        myItm={myItm}
                        key={myItm._id}>

                    </Item>)
                        :
                        products.map(myItm => <Item
                            myItm={myItm}
                            key={myItm._id}>

                        </Item>)
                }
            </div>
        </div>

    )
}
