import React, { useEffect, useState } from 'react'
import { CraftSingleItem } from './CraftSingleItem';
import { ArtCatItem } from './ArtCatItem';

export const ArtCategory = () => {

    const [artCat, setArtCat] = useState([]);

    useEffect(() => {
        fetch('https://server-site-gamma-indol.vercel.app/artCategory')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setArtCat(data)
                // setLoading(false)
            })
    }, [])

    return (
        <div>
            <div className='text-center w-8/12 mx-auto space-y-2 my-10'>
                <h1 className='text-center text-4xl'>Art & Craft Category</h1>
                <p className='text-lg '>Explore a world of creativity with our diverse art & craft categories. From intricate stitching in Embroidery to cozy creations in Knitting & Crocheting, there's something for every craft enthusiast to enjoy.</p>
            </div>
            <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5 p-0  lg:w-full w-10/12 mx-auto mt-5 '>
                {
                    artCat.map((artItem, i) => <ArtCatItem artItem={artItem} key={i}></ArtCatItem> )
                }
            </div>
        </div>
    )
}
