import { useContext } from "react"
import { ContextApi } from "./Route.jsx/ContextProvider"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Helmet } from "react-helmet-async"
import { Navigate, useLoaderData, useParams } from "react-router-dom"


export const UpdateItem = () => {
    const { user } = useContext(ContextApi)
    const { id } = useParams();
    const allItems = useLoaderData();
    // console.log(allItems)

    const uR = allItems.filter(item => item._id === id)
    // console.log(updateRequired)

    const { _id, Img_url, item_name, sub_category, processing_time, stock_status, price, rating, customization, short_description } = uR[0];
    // console.log(_id)

    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        fetch(`http://https://server-site-gamma-indol.vercel.app/items/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.modifiedCount > 0) {
                    toast.success('Item Updated successfully')
                    // reset();

                }
                else if (res.matchedCount > 0) {
                    toast.error("You didn't change anything")
                }
            })


    }

    return (
        <div>

            <div className="lg:w-full w-10/12 mx-auto lg:min-h-[calc(100vh-170px)] bg-cover bg-center  rounded-lg mb-5 flex flex-col items-center justify-center text-center  ">
                <Helmet>
                    <title>Fiber Fution | Add item</title>
                </Helmet>

                <div className='lg:w-11/12 w-full mx-auto flex gap-2 lg:flex-row-reverse items-center justify-center  text-black  p-5  rounded-xl space-y-2 font-medium md:my-5'>
                    <div className="w-4/12 bg-center bg-cover bg-[url('https://i.ibb.co/TMvy73r/website-designer-illustration-concept-1150-39366.jpg')] lg:flex hidden">
                        <p className='w-full lg:h-96 text-white'> <span className='bg-accent  rounded-lg'></span> </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='mx-auto mt-10 flex flex-col gap-5 lg:w-8/12 w-full'>
                        <div>
                            <p className="text-2xl font-extrabold ">Update Info as you desire</p>
                        </div>
                        <div className='flex lg:flex-row flex-col gap-5 w-full'>
                            <div className='w-full flex flex-col gap-3'>
                                <label className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow	1s">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="image"><path d="M13.5,6C12.7,6,12,6.7,12,7.5S12.7,9,13.5,9S15,8.3,15,7.5S14.3,6,13.5,6z M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14
                            c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M20,13.9L18.1,12c-1.2-1.1-3.1-1.1-4.2,0L13,12.9L10.1,10c-1.2-1.1-3.1-1.1-4.2,0L4,11.9V5
                            c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V13.9z"></path></svg>
                                    <input className='text-black w-full' type="text" name='Img_url' defaultValue={Img_url} placeholder="Image URL"
                                        {...register("Img_url", { required: true })} />
                                </label>
                                {errors.Img_url && <span className='text-red-600 text-xs'>This field is required</span>}


                                <label className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow 1s">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 42 42" id="pen"><path fill="#231f20" d="M37.28 4.72a5.52 5.52 0 0 0-7.78 0L5.73 28.49a1.56 1.56 0 0 0-.42.84L4.3 36a1.5 1.5 0 0 0 1.48 1.73h.23l6.66-1a1.56 1.56 0 0 0 .84-.42L37.28 12.5a5.52 5.52 0 0 0 0-7.78ZM11.74 33.8l-4.17.63.63-4.17 19.52-19.51 3.53 3.53Zm23.42-23.42-2.49 2.49-3.54-3.54 2.49-2.49a2.5 2.5 0 1 1 3.54 3.54Z"></path></svg>
                                    <input className='text-black w-full' type="text" defaultValue={item_name} placeholder='Item Name' name='item_name' {...register("item_name", { required: true })} />
                                </label>
                                {errors.item_name && <span className='text-red-600 text-xs'>This field is required</span>}

                                <label className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow 1s">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' id="select"><path fill="none" d="M0 0h48v48H0z"></path><path d="M6 10h4V6c-2.21 0-4 1.79-4 4zm0 16h4v-4H6v4zm8 16h4v-4h-4v4zM6 18h4v-4H6v4zM26 6h-4v4h4V6zm12 0v4h4c0-2.21-1.79-4-4-4zM10 42v-4H6c0 2.21 1.79 4 4 4zm-4-8h4v-4H6v4zM18 6h-4v4h4V6zm4 36h4v-4h-4v4zm16-16h4v-4h-4v4zm0 16c2.21 0 4-1.79 4-4h-4v4zm0-24h4v-4h-4v4zm0 16h4v-4h-4v4zm-8 8h4v-4h-4v4zm0-32h4V6h-4v4zM14 34h20V14H14v20zm4-16h12v12H18V18z"></path></svg>
                                    <select name="sub_category" defaultValue={sub_category} className='w-full h-full border-none bg-none outline-none' placeholder="Select" {...register("sub_category", { required: true })}>
                                        <option value="" disabled selected>Select a Sub-Category</option>
                                        <option value="Embroidery">Embroidery</option>
                                        <option value="Knitting & Crocheting">Knitting & Crocheting</option>
                                        <option value="Quilting">Quilting</option>
                                        <option value="Beadwork">Beadwork</option>
                                        <option value="Tie-Dyeing">Tie-Dyeing</option>
                                        <option value="Macrame">Macrame</option>
                                    </select>
                                </label>
                                {errors.sub_category && <span className='text-red-600 text-xs'>This field is required</span>}

                                <label className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow 1s">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 42 42" id="pen"><path fill="#231f20" d="M37.28 4.72a5.52 5.52 0 0 0-7.78 0L5.73 28.49a1.56 1.56 0 0 0-.42.84L4.3 36a1.5 1.5 0 0 0 1.48 1.73h.23l6.66-1a1.56 1.56 0 0 0 .84-.42L37.28 12.5a5.52 5.52 0 0 0 0-7.78ZM11.74 33.8l-4.17.63.63-4.17 19.52-19.51 3.53 3.53Zm23.42-23.42-2.49 2.49-3.54-3.54 2.49-2.49a2.5 2.5 0 1 1 3.54 3.54Z"></path></svg>
                                    <input className='text-black w-full' type="number" placeholder='Processing Time in Hour' defaultValue={processing_time} name='processing_time' {...register("processing_time", { required: true })} />
                                </label>
                                {errors.processing_time && <span className='text-red-600 text-xs'>This field is required</span>}

                                <label className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow 1s">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' id="select"><path fill="none" d="M0 0h48v48H0z"></path><path d="M6 10h4V6c-2.21 0-4 1.79-4 4zm0 16h4v-4H6v4zm8 16h4v-4h-4v4zM6 18h4v-4H6v4zM26 6h-4v4h4V6zm12 0v4h4c0-2.21-1.79-4-4-4zM10 42v-4H6c0 2.21 1.79 4 4 4zm-4-8h4v-4H6v4zM18 6h-4v4h4V6zm4 36h4v-4h-4v4zm16-16h4v-4h-4v4zm0 16c2.21 0 4-1.79 4-4h-4v4zm0-24h4v-4h-4v4zm0 16h4v-4h-4v4zm-8 8h4v-4h-4v4zm0-32h4V6h-4v4zM14 34h20V14H14v20zm4-16h12v12H18V18z"></path></svg>
                                    <select name="stock_status" defaultValue={stock_status} className='w-full h-full border-none bg-none outline-none' placeholder="Select" {...register("stock_status", { required: true })}>
                                        <option value="" disabled selected>Select a stock status</option>
                                        <option value="In Stock">In Stock</option>
                                        <option value="Preparable in a while">Preparable in a while</option>
                                        <option value="Preparable in one day">Preparable in one day</option>
                                        <option value="unavailable">Out Of Stock</option>

                                    </select>
                                </label>
                                {errors.stock_status && <span className='text-red-600 text-xs'>This field is required</span>}


                            </div>


                            <div className='w-full flex flex-col gap-3'>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 20 20" id="price"><path d="M19.388.405a.605.605 0 0 0-1.141.399c.929 2.67-.915 4.664-2.321 5.732l-.568-.814c-.191-.273-.618-.5-.95-.504l-3.188.014a2.162 2.162 0 0 0-1.097.338L.729 12.157a1.01 1.01 0 0 0-.247 1.404l4.269 6.108c.32.455.831.4 1.287.082l9.394-6.588c.27-.191.582-.603.692-.918l.998-3.145c.11-.314.043-.793-.148-1.066l-.346-.496c1.888-1.447 3.848-4.004 2.76-7.133zm-4.371 9.358a1.608 1.608 0 0 1-2.24-.396 1.614 1.614 0 0 1 .395-2.246 1.607 1.607 0 0 1 1.868.017c-.272.164-.459.26-.494.275a.606.606 0 0 0 .259 1.153c.086 0 .174-.02.257-.059.194-.092.402-.201.619-.33a1.615 1.615 0 0 1-.664 1.586z"></path></svg>
                                    <input className='text-black w-full' type="number" name='price' defaultValue={price} placeholder="Price" {...register("price", { required: true })} />
                                </label>
                                {errors.price && <span className='text-red-600 text-xs'>This field is required</span>}

                                <div className="rating h-12 flex items-center gap-2 animate__animated animate__flipInX animate__slow 1s bg-white rounded-lg px-3 border">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 25 25" id="rating"><path fill="#536784" d="M15.439,17.738a.479.479,0,0,1-.215-.049L12.5,16.4,9.776,17.689a.5.5,0,0,1-.509-.046.5.5,0,0,1-.2-.469l.391-2.991L7.381,11.992a.5.5,0,0,1,.272-.835l2.966-.553,1.442-2.65a.522.522,0,0,1,.878,0l1.442,2.65,2.966.553a.5.5,0,0,1,.272.835l-2.075,2.191.391,2.991a.5.5,0,0,1-.5.564Zm-2.939-2.4a.493.493,0,0,1,.215.049l2.109,1-.3-2.317a.5.5,0,0,1,.132-.408l1.607-1.7-2.3-.429a.5.5,0,0,1-.347-.252L12.5,9.239l-1.117,2.052a.5.5,0,0,1-.347.252l-2.3.429,1.607,1.7a.5.5,0,0,1,.132.408l-.3,2.317,2.109-1A.493.493,0,0,1,12.5,15.341Z"></path><path fill="#5596ff" d="M3.95 15.5a.5.5 0 0 1-.5-.565l.308-2.344L2.137 10.875a.5.5 0 0 1 .271-.835L4.734 9.6 5.86 7.523A.5.5 0 0 1 6.3 7.262h0a.5.5 0 0 1 .439.26l1.05 1.93a.5.5 0 1 1-.878.479L6.3 8.81l-.8 1.48a.5.5 0 0 1-.348.253l-1.658.311 1.159 1.224a.5.5 0 0 1 .133.409l-.22 1.667 1.518-.723a.5.5 0 0 1 .43 0l1.48.7a.5.5 0 0 1-.428.9l-1.265-.6L4.166 15.453A.5.5 0 0 1 3.95 15.5zM21.05 15.5a.5.5 0 0 1-.216-.049L18.7 14.436l-1.265.6a.5.5 0 1 1-.428-.9l1.48-.7a.5.5 0 0 1 .43 0l1.518.723-.22-1.667a.5.5 0 0 1 .133-.409l1.159-1.224-1.658-.311a.5.5 0 0 1-.348-.253l-.8-1.48-.61 1.121a.5.5 0 1 1-.878-.479l1.05-1.93a.5.5 0 0 1 .439-.26h0a.5.5 0 0 1 .439.261L20.266 9.6l2.326.436a.5.5 0 0 1 .271.835l-1.626 1.718.308 2.344a.5.5 0 0 1-.5.565z"></path></svg>
                                    <caption>Existing rating: {rating}</caption>

                                    <input defaultValue={rating} type="radio" name="rating-2 rating" value="1" className="mask mask-star-2 bg-primary" checked {...register("rating")} />
                                    <input defaultValue={rating} type="radio" name="rating-2 rating" value="2" className="mask mask-star-2 bg-primary" {...register("rating")} />
                                    <input defaultValue={rating} type="radio" name="rating-2 rating" value="3" className="mask mask-star-2 bg-primary" {...register("rating")} />
                                    <input defaultValue={rating} type="radio" name="rating-2 rating" value="4" className="mask mask-star-2 bg-primary" {...register("rating")} />
                                    <input defaultValue={rating} type="radio" name="rating-2 rating" value="5" className="mask mask-star-2 bg-primary" {...register("rating")} />

                                </div>

                                <label className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow 1s">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 38.81 47.33" id="customize"><g><g><path fill="#fafafa" d="M4.04 6.11h21.77v35.04H4.04z"></path><circle cx="27.82" cy="23.63" r="5.27" fill="#fafafa"></circle><path fill="#555" d="M0 4.3V43a4.32 4.32 0 0 0 4.3 4.3h21.51a4.31 4.31 0 0 0 4.3-4.3v-6.43h-4.3v4.31H4.3V6.46h21.51v4.3h4.3V4.3a4.31 4.31 0 0 0-4.3-4.3H4.3A4.32 4.32 0 0 0 0 4.3Z"></path><path fill="#0379d4" d="M25.81 34.43h4.3c.22 0 .65-.22.44-.43l.45-2.8a9.12 9.12 0 0 0 1.93-1.07l3 .86c.21.21.43 0 .64-.22l2.15-3.63a1.62 1.62 0 0 0-.22-.86l-2.36-1.73v-2.14l2.36-1.73c.22-.21.43-.43.22-.64l-2.15-3.63a.77.77 0 0 0-.64-.22l-2.8 1.08a9 9 0 0 0-1.94-1.08l-.43-2.79c-.21-.22-.43-.44-.65-.44h-4.3c-.43 0-.64.22-.64.44l-.43 2.79a9 9 0 0 0-1.94 1.08L20 16.4c-.21-.21-.43 0-.64.22l-2.15 3.63a.78.78 0 0 0 .22.65l2.36 1.72v2.15l-2.36 1.94c-.22.21-.43.43-.22.64L19.36 31a.84.84 0 0 0 .64.22l2.8-1.08a9 9 0 0 0 1.94 1.08l.43 2.78c.21.21.43.43.64.43ZM28 28a4.3 4.3 0 1 1 4.3-4.3A4.3 4.3 0 0 1 28 28Z"></path></g></g></svg>
                                    <select name="customization" defaultValue={customization} className='w-full h-full border-none bg-none outline-none' placeholder="Select" {...register("customization", { required: true })}>
                                        <option value="" disabled selected>Customization</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>

                                    </select>
                                </label>
                                {errors.customization && <span className='text-red-600 text-xs'>This field is required</span>}

                                <label className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow 1s">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 42 42" id="pen"><path fill="#231f20" d="M37.28 4.72a5.52 5.52 0 0 0-7.78 0L5.73 28.49a1.56 1.56 0 0 0-.42.84L4.3 36a1.5 1.5 0 0 0 1.48 1.73h.23l6.66-1a1.56 1.56 0 0 0 .84-.42L37.28 12.5a5.52 5.52 0 0 0 0-7.78ZM11.74 33.8l-4.17.63.63-4.17 19.52-19.51 3.53 3.53Zm23.42-23.42-2.49 2.49-3.54-3.54 2.49-2.49a2.5 2.5 0 1 1 3.54 3.54Z"></path></svg>
                                    <input className='text-black w-full' type="email" defaultValue={user.email} value={user.email} placeholder='Email' name='email' {...register("email", { required: true })} />
                                </label>
                                {errors.email && <span className='text-red-600 text-xs'>This field is required</span>}

                                <label className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow 1s">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 42 42" id="pen"><path fill="#231f20" d="M37.28 4.72a5.52 5.52 0 0 0-7.78 0L5.73 28.49a1.56 1.56 0 0 0-.42.84L4.3 36a1.5 1.5 0 0 0 1.48 1.73h.23l6.66-1a1.56 1.56 0 0 0 .84-.42L37.28 12.5a5.52 5.52 0 0 0 0-7.78ZM11.74 33.8l-4.17.63.63-4.17 19.52-19.51 3.53 3.53Zm23.42-23.42-2.49 2.49-3.54-3.54 2.49-2.49a2.5 2.5 0 1 1 3.54 3.54Z"></path></svg>
                                    <input className='text-black w-full' type="text" defaultValue={user.displayName} value={user.displayName} placeholder='User Name' name='user_name' {...register("user_name", { required: true })} />
                                </label>
                                {errors.user_name && <span className='text-red-600 text-xs'>This field is required</span>}
                            </div>

                        </div>

                        <textarea className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow	1s p-2 px-4 h-20" placeholder='Short Description' name="short_description" defaultValue={short_description} rows="4" cols="50" {...register("short_description", { required: true })}>


                        </textarea>
                        {errors.short_description && <span className='text-red-600 text-xs'>This field is required</span>}

                        <button className='btn btn-outline text-white font-extrabold bg-accent hover:bg-primary hover:text-black' type='submit'>Update Item</button>
                    </form>



                </div>
            </div>

        </div>
    )
}
