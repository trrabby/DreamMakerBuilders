import React, { useContext, useEffect, useState } from 'react'
import { GiSewingNeedle, GiSewingString } from 'react-icons/gi'
import { PiBuildingsFill } from 'react-icons/pi'
import { Link, NavLink } from 'react-router-dom'
import { ContextApi } from '../Route.jsx/ContextProvider'
import { FaUserCircle } from 'react-icons/fa'
import toast from 'react-hot-toast'

export const Navbar = () => {

    const { user, signOutfromLogin, setUser, setLoading, loading } = useContext(ContextApi)

    const [theme, setTheme] = useState("light")

    const handleToggle = (e) => {
        const value = e.target.checked
        if (value) {
            setTheme('dark')
            localStorage.setItem('theme', "dark")
        }
        else {
            setTheme("light")
            localStorage.setItem('theme', "light")
        }
    }

    useEffect(() => {
        const getTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', getTheme)
    }, [theme])

    const handleSignOut = () => {
        signOutfromLogin()
            .then((user) => {
                setUser(user)
                setLoading(!null)
            }).catch((error) => {
                console.log(error)
            });
    }

    const handleToast =()=>{
        if(!user){
            return toast.error('log in required to proceed')
        }
    }

    return (
        <div className='flex items-center bg-accent text-black dark:text-white sticky shadow-sm shadow-[#4d4d00] top-0 rounded-b-2xl justify-center z-10'>
            <div className="navbar  flex justify-between items-center">

                <div className='flex flex-row-reverse lg:flex-row justify-between items-center lg:flex-1'>
                    {/* Logo */}
                    <div className="">
                        {/* <a className="btn btn-ghost text-xl">Fiber Fusion</a> */}
                        <Link to={'/'} >
                            <span className="btn btn-ghost text-sm md:text-xl lg:text-2xl text-primary font-extrabold md:flex md:flex-col hidden"><GiSewingNeedle /> Fiber Fusion</span>
                            {user ? <span className='md:hidden w-full flex gap-2 items-center font-extrabold'><GiSewingNeedle /> Fiber Fusion</span> : <span className='md:hidden text-base w-full flex items-center gap-2 absolute mt-[-12px]'>
                                <GiSewingNeedle /> Fiber Fusion</span>}
                        </Link>
                    </div>
                    {/* Menu */}
                    <div className='p-0 flex flex-1 justify-around'>
                        {/* menu SM */}
                        <div className="dropdown p-0 lg:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 text-left">
                                <NavLink className={({ isActive }) => isActive ? 'btn btn-active btn-outline]  font-extrabold' : 'btn btn-ghost  font-extrabold'} to={'/'}>Home</NavLink>

                                <NavLink className={({ isActive }) => isActive ?
                                    'btn btn-active btn-outline]  font-extrabold' : 'btn btn-ghost  font-extrabold'} to={'/allItems'}>Art & Craft Items</NavLink>

                                <NavLink className={({ isActive }) => isActive ?
                                    'btn btn-active btn-outline]  font-extrabold' : 'btn btn-ghost  font-extrabold'} to={'/addItems'}>Add Item</NavLink>

                                <NavLink className={({ isActive }) => isActive ? 'btn btn-active  font-extrabold' : 'btn btn-ghost  font-extrabold'} to={'/myItem'}>My Art & Craft List</NavLink>

                                {
                                    !user && <NavLink className={({ isActive }) => isActive ? 'btn btn-active  font-extrabold' : 'btn btn-ghost  font-extrabold'} to={'/logIn'}>Log In</NavLink>
                                }
                            </ul>
                        </div>

                        {/* Menu lg */}
                        <div className="navbar-center hidden lg:flex gap-3">

                            <NavLink className={({ isActive }) => isActive ? 'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/'}>Home</NavLink>

                            <NavLink className={({ isActive }) => isActive ?
                              'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/allItemsTable'}>All Art & Craft Items</NavLink>

                            <NavLink onClick={handleToast} className={({ isActive }) => isActive ?
                                   'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/addItems'}>Add Item</NavLink>
                            

                            <NavLink onClick={handleToast} className={({ isActive }) => isActive ? 'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/myItems'}>My Art & Craft List</NavLink>
                            

                            {
                                !user && <NavLink className={({ isActive }) => isActive ? 'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/logIn'}>Log In</NavLink>
                            }
                            {
                                !user && <NavLink className={({ isActive }) => isActive ? 'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/register'}>Register</NavLink>
                            }

                            {/* <Link to={'/about_us'}><li>About Us</li></Link> */}

                        </div>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end tooltip tooltip-bottom" data-tip="Settings">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            {user ?
                                <>
                                    {/* <p className='hover:tooltip'>{user.email}</p> */}
                                    <div className="dropdown dropdown-hover">
                                        <div tabIndex={0} role="button" >
                                            <div className='text-black font-bold h-8 w-8 rounded-full '>
                                                {
                                                    user.photoURL ?
                                                        <div>
                                                            <img className='rounded-full h-8 w-8' src={user.photoURL} />
                                                        </div> :
                                                        <Link><FaUserCircle className='w-full h-full' />
                                                        </Link>

                                                }

                                            </div>

                                        </div>
                                        {/* <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-black rounded-box w-52 text-center">
                                            <Link>{user.displayName || "No Name Found"}</Link>
                                        </ul> */}
                                    </div>

                                </> :

                                <div className="tooltip tooltip-bottom flex items-center justify-center" data-tip="Settings">
                                    <button className="bg-transparent border-none text-black"> <FaUserCircle className='md:w-8 md:h-8' /></button>
                                </div>



                            }
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-accent rounded-box w-64 text-black  font-bold">
                            <li>
                                {user && <a className="justify-between hover:text-primary">
                                    {user.displayName}
                                    <span className="badge">New</span>
                                </a>}
                            </li>
                            <li><a>Settings</a></li>
                            {user && <li><button onClick={handleSignOut} className="btn btn-ghost hover:text-primary">Sign Out</button></li>}
                            <Link to={'/login'}>
                                {!user && <li><button className="btn btn-ghost font-bold">Log In</button></li>}
                            </Link>
                        </ul>
                    </div>
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input onChange={handleToggle} type="checkbox" />

                        {/* sun icon */}
                        <svg className="swap-on fill-current md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>


            </div>
        </div >
    )
}
