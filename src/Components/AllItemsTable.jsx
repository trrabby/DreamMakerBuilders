import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLoaderData } from 'react-router-dom'
import { ContextApi } from '../Route.jsx/ContextProvider'
import toast from 'react-hot-toast'

export const AllItemsTable = () => {
    // const items = useLoaderData()
    const [items, setItems] = useState(null)
    const { user, setLoading } = useContext(ContextApi)
    

    useEffect(() => {
        fetch('http://localhost:4000/items')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setItems(data)
                setLoading(false);
                
            })

    }, [])
    
    const handleDetails = ()=>{
        if(!user){
            return toast.error('Please Login to see details')
        }
    }

    return (
        <div className='mt-5'>
            <Helmet>
                <title>Fiber Fution | All item</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table-sm w-full text-center ">
                    {/* head */}
                    <thead className='underline' >
                        <tr >
                            <th></th>
                            <th>Product Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Stock Status</th>
                            <th>Added By</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items &&
                            items.map((item, i) => <tr key={item._id} className='hover:bg-[#dab9b93b] border-b'>
                                <th>{i + 1}</th>
                                <td>{item.item_name}</td>
                                <td>{item.sub_category}</td>
                                <td>{item.price}</td>
                                <td>{item.rating}</td>
                                <td>{item.user_name}</td>
                                <th><Link onClick={handleDetails} to={`/items/${item._id}`} className='btn bg-accent text-white hover:bg-white hover:text-black'>View Details</Link></th>
                            </tr>

                            )

                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}
