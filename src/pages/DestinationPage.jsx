import React from 'react'
import { useParams, NavLink } from 'react-router-dom';
import data from '../data.json'
const DestinationPage = () => {
    const { destId } = useParams();
    const { destinations } = data;
    const { name, description, distance, travel, images } = destinations[destId];
    let activeClassName = 'decoration-2 decoration-cream underline-offset-8 underline text-cream';
    let nonActive = 'no-underline text-lightBlue hover:underline decoration-2 decoration-lightBlue hover:opacity-50 underline-offset-8';
    return (
        <div className='p-4 mt-9 md:flex justify-around  '>
            <div className="md:w-1/2 md:ml-10 p-4 text-center left">
                <p className='mx-auto md:w-full text-lg  text-cream '>
                    <span className=' font-bold mr-4 tracking-widest opacity-50 md:text-xl'>01</span>
                    <span className='uppercase font-normal tracking-wider md:text-2xl'>Pick Up your destination</span>
                </p>
                <div className="planet mt-10  mx-auto md:ml-6">
                    <img src={images.webp} alt="" className='' />
                </div>
            </div>
            <div className='md:flex flex-col justify-evenly right'>
                <div className="menu text-lightBlue  uppercase">
                    <ul className=' flex justify-evenly text-sm tracking-widest font-secondary md:text-lg'>
                        <li className=''>
                            <NavLink to="/destination/0" className={({ isActive }) =>
                                isActive ? activeClassName : nonActive}>Moon</NavLink>
                        </li>
                        <li className=''>
                            <NavLink to="/destination/1" className={({ isActive }) =>
                                isActive ? activeClassName : nonActive}>Mars</NavLink>
                        </li>
                        <li className=''> <NavLink to="/destination/2" className={({ isActive }) =>
                            isActive ? activeClassName : nonActive}>Europa</NavLink>
                        </li>
                        <li className=''> <NavLink to="/destination/3" className={({ isActive }) =>
                            isActive ? activeClassName : nonActive}>Titan</NavLink>
                        </li>
                    </ul>
                </div>
                <h1 className='text-6xl w-1/2 mx-auto mt-10 uppercase tracking-wider md:text-left md:text-8xl '>{name}</h1>
                <p className='font-secondary md:text-xl md:text-left md:w-1/2 w-11/12 leading-7 tracking-wide text-center  mx-auto text-lightBlue '>{description}</p>
                <hr className='mt-8 border-lightBlue opacity- md:mt-1 md:w-1/2 mx-auto' />
                <div className='flex flex-col md:flex-row justify-center   items-center mt-7 md:mt-0 md:w-full text-center'>
                    <div className='md:mr-10'>
                        <p className='font-secondary text-sm text-lightBlue'>AVG. DISTANCE</p>
                        <p className='uppercase mt-2 md:mt-0 text-2xl'>{distance}</p>
                    </div>
                    <div className='md:ml-2'>
                        <p className='font-secondary mt-2 md:mt-0 text-lightBlue'>Est. travel time</p>
                        <p className='uppercase mt-2 md:mt-0 text-2xl'>{travel}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DestinationPage;