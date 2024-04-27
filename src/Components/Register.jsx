import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { ContextApi } from '../Route.jsx/ContextProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export const Register = () => {
    const { registerWithEmail, setErr, err } = useContext(ContextApi)
    const [toggle, setToggle] = useState(false);

    const handleForm = (e) => {
        e.preventDefault();
        const form= e.target
        const email = form.email.value;
        const password = form.pass.value;
        const name = form.name.value;
        const PhotoURL = form.PhotoURL.value;
        // console.log(email, PhotoURL, name, password)

        if (!/(?=.*[A-Z])/.test(password)) {
            setErr('Must have an Uppercase letter in the password')
            return
        }

        else if (!/(?=.*[a-z])/.test(password)) {
            setErr('Must have a Lowercase letter in the password')
            return
        }

        else if (!/.{6,}/.test(password)) {
            setErr('Length must be at least 6 characters')
            return
        }


        registerWithEmail(email, password, name, PhotoURL)
            .then((userCredential) => {
                const user = userCredential.user;
                toast.success('Registration Successfull')
                // navigate(location?.state ? location.state : "/");
                form.reset();

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setErr(errorMessage);
                toast.error('Registration Unsuccessfull')
            });


    }
    return (
        <div className="lg:w-full w-10/12  mx-auto min-h-[calc(100vh-10px)] bg-cover bg-center bg-[url('https://i.ibb.co/cCsnZYZ/adrian-sulyok-c-4ea-GRDSVU-unsplash.jpg')] rounded-lg mb-5 mt-5 flex flex-col items-center justify-center text-center md:p-10  ">
            <Helmet>
                <title>Fiber Fusion | Register</title>
            </Helmet>
            <div className='lg:w-7/12 md:w-11/12 w-full mx-auto flex flex-col items-center justify-center  text-black bg-[#252c2eab] p-5  rounded-xl space-y-2 font-extrabold '>
                <form onSubmit={handleForm} className='mx-auto mt-10 flex flex-col gap-5 lg:w-8/12 md:w-10/12 w-full relative'>

                    <label data-aos="zoom-out-right" data-aos-duration='1000' className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input className='text-black w-full text-sm' type="email" name='email' placeholder="Email" required />
                    </label>

                    {/* {err &&

                        <div className='absolute bg-red-500 h-auto w-10/12 ml-[470px] mt-[-20px] p-2 lg:flex hidden '>
                            {err}
                        </div>

                    } */}

                    <label data-aos="zoom-out-left" data-aos-duration='1000' className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input className='text-black w-full' type="text" name='name' placeholder="Username" required />
                    </label>
                    <label data-aos="zoom-out-right" data-aos-duration='1000' className="input input-bordered flex items-center gap-2 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input className='text-black w-full'
                            type={toggle ? "text" : "password"}
                            placeholder='Password'
                            name='pass' required />

                        <span onClick={() => setToggle(!toggle)} className='absolute text-black font-extrabold lg:ml-[400px] md:ml-[340px] ml-[220px]  '>
                            {
                                toggle ? <FaRegEyeSlash /> : <FaRegEye />
                            }
                        </span>
                    </label>
                    {err && <p className='text-red-500 flex w-full text-xs'>{err}</p>}

                    <label data-aos="zoom-out-left" data-aos-duration='1000' className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input className='text-black w-full' type="text" name='PhotoURL' placeholder="PhotoURL" />
                    </label>
                    <Link to={'/login'} className='text-sm text-amber-700 font-extrabold text-left flex gap-2'>Have an account? <span className='text-red-200'>Log in</span></Link>
                    <button className='btn btn-outline text-white' type='submit'>Register</button>
                </form>


                {/* <div className='mb-5 mt-5'>
                    <button onClick={() => signInWithGoogle()} className='btn btn-ghost'>Register With Google</button>
                    <button onClick={() => (singInWithGitHub())} className='btn btn-ghost'>Register With GitHub</button>
                </div> */}

            </div>
        </div>
    )
}
