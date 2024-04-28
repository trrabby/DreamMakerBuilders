import React, { useContext } from 'react'
import { ContextApi } from '../Route.jsx/ContextProvider';
import { HiOutlineCurrencyBangladeshi } from 'react-icons/hi2';
import { LuStore } from 'react-icons/lu';
import { TbCategory, TbListDetails } from 'react-icons/tb';
import { BiCustomize } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { GrDocumentUpdate } from 'react-icons/gr';
import toast from 'react-hot-toast';

export const CraftSingleItem = ({ myItm, products, setProducts }) => {
    const { _id, Img_url, item_name, sub_category, processing_time, stock_status, price, rating, customization, short_description } = myItm;

    const {user, handleDelete } = useContext(ContextApi)
    
    const handleToast = ()=>{
    if(!user){
        return toast.error('Please Login to see item details')
    }
    }
    return (
        <div>

            <div data-aos="zoom-out" data-aos-duration='800' className="flex flex-col items-stretch flex-grow whitespace- card card-compact w-full border shadow-accent shadow-sm rounded-2xl  hover:bg-slate-100 cursor-text hover:duration-300 h-full">
                <div><img className='md:h-52 h-44 lg:h-56  
                    w-full rounded-lg p-2 lg:p-5 hover:scale-105 hover:duration-1000 object-center' src={Img_url} alt="" /></div>
                <div className="card-body p-2 flex flex-grow items-stretch flex-col">
                    <h2 className="card-title text-lg md:text-xl text-justify font-semibold lg:text-xl lg:semi-extrabold">
                        {item_name}
                    </h2>

                    {/* <div className='font-semibold'>
                        {short_description.length > 100 ?
                            <p>{short_description.slice(0, 97)}<Link to={`product/${_id}`} className='text-blue-500'>...</Link></p>
                            : short_description}
                    </div> */}
                    <p className='flex items-center gap-2 text-xl  font-semibold text-accent'> <HiOutlineCurrencyBangladeshi className='w-5 h-5' /> Price: {price}</p>
                    <hr />

                    <div className='flex flex-col justify-start w-full items-left gap-2'>

                        <p className='flex items-center gap-2  font-semibold'> <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7' viewBox="0 0 25 25" id="rating"><path fill="#536784" d="M15.439,17.738a.479.479,0,0,1-.215-.049L12.5,16.4,9.776,17.689a.5.5,0,0,1-.509-.046.5.5,0,0,1-.2-.469l.391-2.991L7.381,11.992a.5.5,0,0,1,.272-.835l2.966-.553,1.442-2.65a.522.522,0,0,1,.878,0l1.442,2.65,2.966.553a.5.5,0,0,1,.272.835l-2.075,2.191.391,2.991a.5.5,0,0,1-.5.564Zm-2.939-2.4a.493.493,0,0,1,.215.049l2.109,1-.3-2.317a.5.5,0,0,1,.132-.408l1.607-1.7-2.3-.429a.5.5,0,0,1-.347-.252L12.5,9.239l-1.117,2.052a.5.5,0,0,1-.347.252l-2.3.429,1.607,1.7a.5.5,0,0,1,.132.408l-.3,2.317,2.109-1A.493.493,0,0,1,12.5,15.341Z"></path><path fill="#5596ff" d="M3.95 15.5a.5.5 0 0 1-.5-.565l.308-2.344L2.137 10.875a.5.5 0 0 1 .271-.835L4.734 9.6 5.86 7.523A.5.5 0 0 1 6.3 7.262h0a.5.5 0 0 1 .439.26l1.05 1.93a.5.5 0 1 1-.878.479L6.3 8.81l-.8 1.48a.5.5 0 0 1-.348.253l-1.658.311 1.159 1.224a.5.5 0 0 1 .133.409l-.22 1.667 1.518-.723a.5.5 0 0 1 .43 0l1.48.7a.5.5 0 0 1-.428.9l-1.265-.6L4.166 15.453A.5.5 0 0 1 3.95 15.5zM21.05 15.5a.5.5 0 0 1-.216-.049L18.7 14.436l-1.265.6a.5.5 0 1 1-.428-.9l1.48-.7a.5.5 0 0 1 .43 0l1.518.723-.22-1.667a.5.5 0 0 1 .133-.409l1.159-1.224-1.658-.311a.5.5 0 0 1-.348-.253l-.8-1.48-.61 1.121a.5.5 0 1 1-.878-.479l1.05-1.93a.5.5 0 0 1 .439-.26h0a.5.5 0 0 1 .439.261L20.266 9.6l2.326.436a.5.5 0 0 1 .271.835l-1.626 1.718.308 2.344a.5.5 0 0 1-.5.565z"></path></svg> Rating: {rating}</p>


                        <p className=' font-semibold flex gap-2 items-center text-right'><LuStore />Stock Status: <span className='text-accent font-extrabold '>{stock_status}</span></p>

                        <p className='flex items-center gap-2 text-right mr-2 font-semibold'> <TbCategory /> Sub-Category: {sub_category}</p>

                        <p className=' font-semibold flex gap-2 text-left'><BiCustomize />Customization: <span className=''>{customization}</span></p>
                    </div>
                    
                    <div className='flex justify-around w-full'>
                        <Link onClick={handleToast} to={`/items/${_id}`}>
                            <button className='btn btn-outline text-black hover:bg-accent font-bold hover:scale-105 hover:duration-300  border-none'><TbListDetails />View Property</button>
                        </Link>
                        {/* <Link to={`/update/${_id}`}>
                            <button className='btn btn-outline text-black hover:bg-accent font-bold hover:scale-105 hover:duration-300 border-none'><GrDocumentUpdate />Update</button>
                        </Link> */}
                        {/* <button onClick={() => handleDelete(_id)} className='btn btn-outline text-red-600 hover:bg-red-500 font-bold hover:scale-105 hover:duration-300 border-none'><MdDeleteOutline />Delete</button> */}

                    </div>
                </div>
            </div>
        </div>
    )
}
