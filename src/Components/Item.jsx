import React from 'react'
import { HiMiniCurrencyBangladeshi } from 'react-icons/hi2'
import { IoLocationOutline } from 'react-icons/io5'
import { MdLandscape } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const Item = ({ myItm }) => {
    // console.log(item)
    const { _id, Img_url, item_name, sub_category, processing_time, stock_status, price, rating, customization, short_description } = myItm;

    return (
        <div>
            <div data-aos="zoom-out" data-aos-duration='800' className="flex flex-col items-stretch flex-grow whitespace- card card-compact w-full bg-base-100 shadow-xl rounded-2xl hover:bg-slate-100 cursor-text hover:duration-300 h-full">
                <div><img className='md:h-52 h-44 lg:h-56  
                    w-full rounded-lg p-2 lg:p-0' src={Img_url} alt="" /></div>
                <div className="card-body p-2 flex flex-grow items-stretch flex-col">
                    <p className='flex gap-5 text-green-800 font-semibold'></p>
                    <h2 className="card-title text-lg md:text-xl text-justify font-semibold lg:semi-extrabold">
                        {/* {estate_title.length > 35 ?
                            <p>{estate_title.slice(0, 33)}<Link to={`product/${id}`}>...</Link></p>
                            : estate_title} */}
                        {item_name}
                    </h2>

                    <div className='font-semibold'>
                        {short_description.length > 100 ?
                            <p>{short_description.slice(0, 97)}<Link to={`product/${_id}`} className='text-blue-500'>...</Link></p>
                            : short_description}
                    </div>

                    <hr />
                    <div className='flex justify-between w-full items-center'>
                        <p className=' flex items-center gap-2 text-left font-semibold'><HiMiniCurrencyBangladeshi />{price}</p>
                        <p className='text-right mr-2 font-semibold'>For: <span className='text-amber-600 font-extrabold'>{stock_status}</span></p>
                    </div>
                    <p className='flex items-center gap-2 text-right mr-2 font-semibold'> <MdLandscape /> {rating}</p>
                    <p className='flex items-center gap-2 text-right mr-2 font-semibold'> <IoLocationOutline /> {sub_category}</p>
                    <div className='flex justify-end w-full'>
                        <Link to={`/Product/${_id}`}>
                            <button className='btn btn-outline text-black bg-[#071f1f73] font-bold hover:scale-105 hover:duration-300'>View Property</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
