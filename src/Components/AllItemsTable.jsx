import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export const AllItemsTable = () => {
    const items = useLoaderData()
    // const { _id, Img_url, item_name, sub_category, processing_time, stock_status, price, rating, customization, short_description, user_name } = items;
    return (
        <div className='mt-5'>
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
                        {
                            items.map((item, i) =><tr className='hover:bg-[#dab9b93b] border-b'>
                                <th>{i+1}</th>
                                <td>{item.item_name}</td>
                                <td>{item.sub_category}</td>
                                <td>{item.price}</td>
                                <td>{item.rating}</td>
                                <td>{item.user_name}</td>
                                <th><Link to={`/items/${item._id}`} className='btn bg-primary text-white hover:bg-white hover:text-black'>View Details</Link></th>
                              </tr>
                              
                            )
                              
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
