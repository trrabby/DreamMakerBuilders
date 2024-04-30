import React from 'react'
import Marquee from "react-fast-marquee";

export const ExtraSections = () => {

    const marquee = [
        "https://i.ibb.co/HK0tHhg/american-eagle-outfitters-logo-black-and-white.png",
        "https://i.ibb.co/fF9XJP6/adidas-basketball-logo-black-and-white.png",
        "https://i.ibb.co/Zg5sv6T/dairy-queen-logo-2.png",
        "https://i.ibb.co/QmX9gmF/dairy-queen-logo.png",
        "https://i.ibb.co/N1ZybFG/brand-4.png",
    ];

    return (
        <div className='my-10 space-y-20'>
            <div className='text-center w-8/12 mx-auto space-y-16'>
                <div>
                    <h1 className='text-center text-4xl'>Our Valuable Partners</h1>
                </div>
                <Marquee>
                    {marquee.map((src, index) => (
                        <img className='h-20 mx-5 opacity-90' key={index} src={src} alt="" />
                    ))}
                </Marquee>
            </div>


            <div id='accordion' className='mt-10 mb-10 flex flex-col items-center justify-center space-y-5 w-10/12 mx-auto my-10'>
                
                <h1 className='lg:text-4xl md:text-2xl text-xl font-bold'>Frequently Asked Questions</h1>
                <div className="join join-vertical w-full">
                    {/* <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-lg font-medium">
                    What is the name of the real estate company born in Bangladesh after the liberation war?
                    </div>
                    <div className="collapse-content">
                        <p>Dream Maker Builders.</p>
                    </div>
                </div> */}
                    <div data-aos="zoom-out-down" data-aos-duration='800' data-aos-delay='400' className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title md:text-lg text-sm font-bold">
                            When was Dream Maker Builders founded?
                        </div>
                        <div className="collapse-content md:text-base text-sm">
                            <p>Dream Maker Builders was founded in the aftermath of the liberation war in Bangladesh.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-down" data-aos-duration='800' data-aos-delay='500' className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title md:text-lg text-sm font-bold">
                            What is the vision of Dream Maker Builders?
                        </div>
                        <div className="collapse-content md:text-base text-sm">
                            <p>Dream Maker Builders aims to redefine urban living by crafting iconic spaces that inspire and uplift communities.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-down" data-aos-duration='800' data-aos-delay='600' className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title md:text-lg text-sm font-bold">
                            What principles guide Dream Maker Builders?
                        </div>
                        <div className="collapse-content md:text-base text-sm">
                            <p>Dream Maker Builders is guided by principles of innovation, craftsmanship, dedication, and community development.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-down" data-aos-duration='800' data-aos-delay='700' className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title md:text-lg text-sm font-bold">
                            What sets Dream Maker Builders apart from other real estate companies?
                        </div>
                        <div className="collapse-content md:text-base text-sm">
                            <p>Dream Maker Builders stands out for its commitment to excellence, resilience, and its focus on turning dreams into reality.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-down" data-aos-duration='800' data-aos-delay='800' className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title md:text-lg text-sm font-bold">
                            How does Dream Maker Builders contribute to the development of Bangladesh?
                        </div>
                        <div className="collapse-content md:text-base text-sm">
                            <p>Dream Maker Builders contributes to the development of Bangladesh by building premium properties that cater to the evolving needs of the nation.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-down" data-aos-duration='800' data-aos-delay='900' className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title md:text-lg text-sm font-bold">
                            What types of properties does Dream Maker Builders specialize in?
                        </div>
                        <div className="collapse-content md:text-base text-sm">
                            <p>Dream Maker Builders specializes in various types of properties, including office buildings, retail spaces, and residential complexes.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-down" data-aos-duration='800' data-aos-delay='1000' className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title md:text-lg text-sm font-bold">
                            What is the mission of Dream Maker Builders?
                        </div>
                        <div className="collapse-content md:text-base text-sm">
                            <p>Dream Maker Builders' mission is to shape the skyline of Bangladesh and build a brighter future for generations to come.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-down" data-aos-duration='800' data-aos-delay='1100' className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title md:text-lg text-sm font-bold">
                            How does Dream Maker Builders approach its projects?
                        </div>
                        <div className="collapse-content md:text-base text-sm">
                            <p>Dream Maker Builders approaches its projects with a blend of innovation, craftsmanship, and dedication to ensure the highest quality outcomes.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-down" data-aos-duration='800' data-aos-delay='1200' className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title md:text-lg text-sm font-bold">
                            What is the tagline of Dream Maker Builders?
                        </div>
                        <div className="collapse-content md:text-base text-sm">
                            <p>Dream Maker Builders - where dreams take shape and aspirations find home.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
