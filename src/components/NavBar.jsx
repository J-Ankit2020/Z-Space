import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    let activeClassName = 'decoration-2 decoration-cream underline-offset-8 underline text-cream';
    let nonActive = 'no-underline text-lightBlue hover:underline decoration-2 decoration-lightBlue hover:opacity-50 underline-offset-8';
    return (
        <header className='flex justify-end  md:justify-between md:items-center  '>
            <div className="logo rounded-full bg-black w-10 h-10 ml-4">
                {/* <img src="../assets/" alt="" /> */}
            </div>
            <nav className='hidden md:block w-1/2 '>
                <ul className='flex justify-between bg-[rgba(255, 255, 255, 0.04)] backdrop-blur-[40.7742px] p-4 py-6 mt-5 uppercase mr-4'>
                    <NavLink to="/" className={({ isActive }) => isActive ? activeClassName : nonActive}>
                        <li className=''>00 Home</li>
                    </NavLink>
                    <NavLink to="/destination/0" className={({ isActive }) => isActive ? activeClassName : nonActive}>
                        <li className=''>01 Destination</li>
                    </NavLink>
                    <NavLink to="/crew" className={({ isActive }) => isActive ? activeClassName : nonActive}>
                        <li className=''>02 Crew</li>
                    </NavLink>
                    <NavLink to="/" className={({ isActive }) => isActive ? activeClassName : nonActive}>
                        <li className=''>03 Technology</li>
                    </NavLink>
                </ul>
            </nav>
            <nav className={`fixed h-screen px-4 py-2 ${isOpen ? 'bg-primary backdrop-blur-3xl w-1/2 text-xl font-semibold} text-cream' : ''} md:hidden`} >
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <ul className={`${isOpen ? '' : 'hidden'} flex flex-col justify-around mt-5`}>
                    <li className=''>00 Home</li>
                    <li className='mt-3'>01 Destination</li>
                    <li className='mt-3'>02 Crew</li>
                    <li className='mt-3'>03 Technology</li>
                </ul>
            </nav>
        </header >
    )
}

export default NavBar