import React from 'react'
import { BsTelephoneInbound } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { GiSewingNeedle } from 'react-icons/gi'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { MdMyLocation } from 'react-icons/md'
import { PiBuildingsFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div>

            <footer className='footer bg-accent flex flex-col rounded-t-2xl mt-5 ' >
                <div className=" flex md:flex-row flex-col justify-between md:gap-2  text-black text-sm font-bold px-10  lg:w-full w-10/12 mx-auto mt-5 gap-10 items-center ">
                    <div className='flex items-center h-auto'>
                        <Link to={'/'} className="lg:text-4xl md:text-2xl text-xl text-primary font-extrabold flex gap-2"><GiSewingNeedle /> Fiber Fusion</Link>
                    </div>
                    <div className='flex md:flex-row flex-col md:justify-between justify-around gap-2 md:w-7/12 w-full px-2 '>
                        <nav className='flex flex-col'>
                            <h6 className="footer-title">Services</h6>
                            <a className="link link-hover hover:text-primary">Custom Artwork Commissions</a>
                            <a className="link link-hover hover:text-primary">Art Supplies Consultation</a>
                            <a className="link link-hover hover:text-primary">Workshops and Classes</a>
                            <a className="link link-hover hover:text-primary">Artwork Framing and Mounting</a>
                        </nav>
                        <nav className='flex flex-col'>
                            <h6 className="footer-title   hover:text-primary">Company</h6>
                            <a className="link link-hover hover:text-primary">About us</a>
                            <a className="link link-hover hover:text-primary">Contact</a>
                            <a className="link link-hover hover:text-primary">Jobs</a>
                            <a className="link link-hover hover:text-primary">Press kit</a>
                        </nav>
                        <nav className='flex flex-col'>
                            <h6 className="footer-title hover:text-primary">Legal</h6>
                            <a className="link link-hover hover:text-primary">Terms of use</a>
                            <a className="link link-hover hover:text-primary">Privacy policy</a>
                            <a className="link link-hover hover:text-primary">Cookie policy</a>
                        </nav>
                    </div>
                </div>

                <div className='text-center w-full flex md:flex-row flex-col gap-3 justify-center items-center'>
                    <h1 className='text-primary text-xl font-extrabold'>Get In Touch</h1>
                    <p className='flex gap-2 text-base font-extrabold items-center hover:text-primary cursor-pointer'><HiOutlineMailOpen /> info@fiberfusion.org</p>
                    <p className='flex gap-2 text-base font-extrabold items-center hover:text-primary cursor-pointer'><BsTelephoneInbound /> +880168116484</p>
                    <p className='flex gap-2 text-base font-extrabold items-center hover:text-primary cursor-pointer'><MdMyLocation /> Baridhara, Dhaka</p>
                </div>

                <div className='w-full flex md:flex-row flex-col items-center justify-between'>
                    {/* <hr className="text-gray-400 w-full" /> */}
                    <div className="flex justify-center items-center gap-3 p-3 w-full border-r-2">
                        <a target='_blank' href="https://www.facebook.com/profile.trrabby">
                            <p className="p-3 rounded-full border-2 border-gray-400 hover:bg-primary">
                                <FaFacebookF className="text-2xl text-white" />
                            </p>
                        </a>
                        <a target='_blank' href="https://www.linkedin.com/in/towfique">
                            <p className="p-3 rounded-full border-2 border-gray-400 hover:bg-primary">
                                <FaLinkedinIn className="text-2xl text-white" />
                            </p>
                        </a>
                        <a>
                            <p className="p-3 rounded-full border-2 border-gray-400 hover:bg-primary">
                                <FaInstagram className="text-2xl text-white" />
                            </p>
                        </a>
                        <a>
                            <p className="p-3 rounded-full border-2 border-gray-400 hover:bg-primary">
                                <FaXTwitter className="text-2xl text-white" />
                            </p>
                        </a>
                    </div>

                    <p className="text-primary font-extrabold text-center p-3 w-full">
                        © 2024 Fiber Fusion. All rights reserved.
                    </p>
                    {/* <hr className="text-gray-400 w-full" /> */}
                    

                </div>
            </footer>

        </div>
    )
}
