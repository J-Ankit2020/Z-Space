import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import data from '../data.json'
const Crew = () => {
    const { crew } = data;
    const [idx, setIdx] = useState(0);
    const { name, images, role, bio } = crew[idx];

    const handleDragStart = (e) => e.preventDefault();
    const dataChanger = (cl) => {
        setIdx((idx + 1) % 4);
        // console.log(cl)
    }
    const items = [
        <img src="/assets/crew/image-douglas-hurley.png" onDragStart={handleDragStart} role="presentation" className='w-full h-full text-center' />,
        <img src="/assets/crew/image-mark-shuttleworth.png" onDragStart={handleDragStart} role="presentation" className='w-full h-full text-center' />,
        <img src="/assets/crew/image-victor-glover.png" onDragStart={handleDragStart} role="presentation" className='w-full h-full text-center' />,
        <img src='/assets/crew/image-anousheh-ansari.png' onDragStart={handleDragStart} role="presentation" className='w-full h-full text-center' />
    ];
    return (
        <div>
            <p className='font-secondary text-center text-2xl leading-4 md:text-left md:text-3xl px-3 m-4'>
                <span className='font-bold  text-cream opacity-25 mr-3'>02</span>
                <span className='uppercase tracking-wider text-cream'>Meet Your Crew</span>
            </p>
            <div className='md:flex flex-row-reverse justify-between items-center'>
                <div className="image w-3/4 mx-auto  md:w-1/4 md:h-1/4 ">
                    {/* <img src="/assets/crew/image-douglas-hurley.png" alt="" className='w-full h-full text-center' /> */}
                    <AliceCarousel mouseTracking items={items} disableButtonsControls={true} onSlideChange={dataChanger} infinite={true} />

                    <hr className='text-lightBlue md:hidden' />
                </div>
                <div className='text-center mt-4 md:w-1/2 md:flex flex-col justify-start'>
                    <p className='text-lg text-cream font-normal uppercase opacity-50
                 tracking-wide md:text-4xl md:tracking-normal  p-4'>{role}</p>
                    <p className='text-2xl uppercase tracking-wider leading-7 md:text-6xl'>{name}</p>
                    <p className='mt-3 w-3/4 text-justify font-secondary mx-auto text-base text-lightBlue tracking-wide leading-6 md:w-1/2'>{bio}</p>
                </div>
            </div>
        </div>
    )
}

export default Crew