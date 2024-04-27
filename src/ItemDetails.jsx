import React from 'react'
import { Helmet } from 'react-helmet-async';
import { HiMiniCurrencyBangladeshi } from 'react-icons/hi2';
import { IoLocationOutline } from 'react-icons/io5';
import { MdLandscape } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom'

export const ItemDetails = () => {
    const item = useLoaderData();
    const { _id, Img_url, item_name, sub_category, processing_time, stock_status, price, rating, customization, short_description, user_name } = item;

    console.log(item)
    return (
        <div className='mt-5'>
            <Helmet>
                <title>Fiber Fution | Product {_id}</title>
            </Helmet>
            <div className="flex lg:flex-row flex-col items-stretch flex-grow whitespace- card card-compact lg:w-full w-10/12 mx-auto bg-base-100 shadow-xl rounded-2xl hover:bg-slate-100 cursor-text hover:duration-300 h-full border border-blue-200 mb-5">
                <div className='lg:w-8/12'>
                    <figure><img className='md:max-h-[calc(100vh-1px)] max-h-[calc(100vh-150px)]  
                    w-full rounded-2xl p-5' src={Img_url} alt="" /></figure>
                </div>
                <div className='lg:w-4/12'>
                    <div className="card-body p-2 flex flex-grow items-stretch flex-col space-y-2">
                        <h2 className="card-title md:text-xl text-base font-extrabold text-justify">{item_name}</h2>

                        <p className='md:text-lg text-sm font-semibold text-justify'>{short_description}</p>

                        <p className='md:text-lg text-sm  font-semibold text-justify'>{sub_category}</p>
                        <hr />
                        <div className='flex justify-between w-full items-center md:text-lg text-sm '>
                            <p className=' flex items-center gap-2 text-left font-semibold'><HiMiniCurrencyBangladeshi className='' />{price}</p>
                            <p className='text-right mr-2 font-semibold '>For: <span className='text-amber-600 font-extrabold'>{stock_status}</span></p>
                        </div>
                        <p className='flex items-center gap-2 text-right mr-2 font-semibold md:text-lg text-sm '> <MdLandscape /> {processing_time}</p>
                        <p className='flex items-center gap-2 text-right mr-2 font-semibold md:text-lg text-sm '> <IoLocationOutline /> {rating}</p>
                        <p className='flex items-center gap-2 text-right mr-2 font-semibold md:text-lg text-sm '> <IoLocationOutline /> {customization}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
