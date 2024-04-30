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
                        What types of products are offered at Fiber Fusion?
                        </div>
                        <div className="collapse-content md:text-base text-sm">
                            <p>Fiber Fusion offers a wide range of art and craft supplies, including yarns, fabrics, threads, beads, and more.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-down" data-aos-duration='800' data-aos-delay='500' className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title md:text-lg text-sm font-bold">
                        How does Fiber Fusion aim to inspire its customers?
                        </div>
                        <div className="collapse-content md:text-base text-sm">
                            <p>Fiber Fusion aims to inspire its customers by providing high-quality products and services that ignite their imagination and bring their artistic visions to life.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-down" data-aos-duration='800' data-aos-delay='600' className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title md:text-lg text-sm font-bold">
                        What personalized services does Fiber Fusion offer?
                        </div>
                        <div className="collapse-content md:text-base text-sm">
                            <p>Fiber Fusion offers customization and personalization services, allowing customers to create personalized artwork, bespoke craft kits, and custom embroidery.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-down" data-aos-duration='800' data-aos-delay='700' className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title md:text-lg text-sm font-bold">
                        How does Fiber Fusion engage with its community?
                        </div>
                        <div className="collapse-content md:text-base text-sm">
                            <p>Fiber Fusion engages with its community by hosting events, classes, and social gatherings where artists and crafters can connect, share inspiration, and celebrate creativity together.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-down" data-aos-duration='800' data-aos-delay='800' className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title md:text-lg text-sm font-bold">
                        What online convenience does Fiber Fusion offer to its customers?
                        </div>
                        <div className="collapse-content md:text-base text-sm">
                            <p>Fiber Fusion offers online shopping with doorstep delivery, making it convenient for customers to access art and craft supplies from anywhere.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-down" data-aos-duration='800' data-aos-delay='900' className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title md:text-lg text-sm font-bold">
                        How does Fiber Fusion ensure the quality of its products?
                        </div>
                        <div className="collapse-content md:text-base text-sm">
                            <p>Fiber Fusion offers a curated selection of premium art and craft supplies, carefully chosen for their quality and versatility, ensuring that customers have access to high-quality materials for their creative projects.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-down" data-aos-duration='800' data-aos-delay='1000' className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title md:text-lg text-sm font-bold">
                        What sets Fiber Fusion apart from other art and craft shops?
                        </div>
                        <div className="collapse-content md:text-base text-sm">
                            <p>Fiber Fusion stands out for its commitment to providing premium quality products, expert guidance, personalized services, community engagement, and convenient online shopping, creating a comprehensive and enriching experience for customers.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-down" data-aos-duration='800' data-aos-delay='1100' className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title md:text-lg text-sm font-bold">
                        How does Fiber Fusion support artists and makers?
                        </div>
                        <div className="collapse-content md:text-base text-sm">
                            <p>Fiber Fusion supports artists and makers by providing resources, information, and opportunities for skill development through workshops, consultations, and community events, fostering a supportive and nurturing environment for creativity to flourish.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-out-down" data-aos-duration='800' data-aos-delay='1200' className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title md:text-lg text-sm font-bold">
                        In what ways does Fiber Fusion contribute to the local creative community?
                        </div>
                        <div className="collapse-content md:text-base text-sm">
                            <p>Fiber Fusion contributes to the local creative community by organizing exhibitions, events, and collaborations with local artists and artisans, showcasing their work and promoting the vibrant arts and crafts scene in the area.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
